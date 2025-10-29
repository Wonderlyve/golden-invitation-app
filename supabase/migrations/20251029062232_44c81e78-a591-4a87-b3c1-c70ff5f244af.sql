-- Create wedding_details table
CREATE TABLE public.wedding_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  groom_name TEXT NOT NULL DEFAULT '',
  bride_name TEXT NOT NULL DEFAULT '',
  ceremony_time TEXT NOT NULL DEFAULT '',
  wedding_date TEXT NOT NULL DEFAULT '',
  venue TEXT NOT NULL DEFAULT '',
  venue_location TEXT NOT NULL DEFAULT '',
  website_url TEXT NOT NULL DEFAULT '',
  couple_photo_url TEXT DEFAULT '',
  invitation_text TEXT NOT NULL DEFAULT '',
  rsvp_phone_number TEXT NOT NULL DEFAULT '',
  template TEXT NOT NULL DEFAULT 'modern',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Create guests table
CREATE TABLE public.guests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  table_number TEXT NOT NULL,
  phone_number TEXT NOT NULL DEFAULT '',
  is_verified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.wedding_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guests ENABLE ROW LEVEL SECURITY;

-- RLS Policies for wedding_details
CREATE POLICY "Users can view their own wedding details"
  ON public.wedding_details
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own wedding details"
  ON public.wedding_details
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own wedding details"
  ON public.wedding_details
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own wedding details"
  ON public.wedding_details
  FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for guests
CREATE POLICY "Users can view their own guests"
  ON public.guests
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own guests"
  ON public.guests
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own guests"
  ON public.guests
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own guests"
  ON public.guests
  FOR DELETE
  USING (auth.uid() = user_id);

-- Create storage bucket for couple photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('couple-photos', 'couple-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for couple photos
CREATE POLICY "Users can view all couple photos"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'couple-photos');

CREATE POLICY "Authenticated users can upload couple photos"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'couple-photos' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "Users can update their own couple photos"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'couple-photos' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can delete their own couple photos"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'couple-photos' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for wedding_details updated_at
CREATE TRIGGER update_wedding_details_updated_at
  BEFORE UPDATE ON public.wedding_details
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();