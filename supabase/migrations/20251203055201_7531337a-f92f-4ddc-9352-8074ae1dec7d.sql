-- Create wedding_details table
CREATE TABLE public.wedding_details (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  groom_name TEXT DEFAULT 'Jean',
  bride_name TEXT DEFAULT 'Marie',
  ceremony_time TEXT DEFAULT '16:00',
  wedding_date TEXT DEFAULT '15 Juin 2025',
  venue TEXT DEFAULT 'Église Saint-Pierre',
  venue_location TEXT DEFAULT 'Paris, France',
  website_url TEXT DEFAULT '',
  couple_photo_url TEXT DEFAULT '',
  invitation_text TEXT DEFAULT 'Nous avons le plaisir de vous inviter à célébrer notre union',
  rsvp_phone_number TEXT DEFAULT '',
  template TEXT DEFAULT 'elegant',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create guests table
CREATE TABLE public.guests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  table_number TEXT DEFAULT '',
  phone_number TEXT DEFAULT '',
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.wedding_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guests ENABLE ROW LEVEL SECURITY;

-- Policies for wedding_details
CREATE POLICY "Users can view their own wedding details" 
ON public.wedding_details FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own wedding details" 
ON public.wedding_details FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own wedding details" 
ON public.wedding_details FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own wedding details" 
ON public.wedding_details FOR DELETE 
USING (auth.uid() = user_id);

-- Policies for guests
CREATE POLICY "Users can view their own guests" 
ON public.guests FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own guests" 
ON public.guests FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own guests" 
ON public.guests FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own guests" 
ON public.guests FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates on wedding_details
CREATE TRIGGER update_wedding_details_updated_at
BEFORE UPDATE ON public.wedding_details
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();