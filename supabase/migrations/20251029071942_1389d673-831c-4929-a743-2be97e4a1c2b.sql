-- Create guests table
CREATE TABLE public.guests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  table_number TEXT NOT NULL,
  phone_number TEXT DEFAULT '',
  is_verified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.guests ENABLE ROW LEVEL SECURITY;

-- Create policies for guests table
CREATE POLICY "Users can view their own guests" 
ON public.guests 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own guests" 
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

-- Create wedding_details table
CREATE TABLE public.wedding_details (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  groom_name TEXT NOT NULL DEFAULT 'Jack',
  bride_name TEXT NOT NULL DEFAULT 'Sofia',
  ceremony_time TEXT NOT NULL DEFAULT '10AM',
  wedding_date TEXT NOT NULL DEFAULT '22ᵀᴴ OCT',
  venue TEXT NOT NULL DEFAULT 'Sheraton Kauai Resort',
  venue_location TEXT NOT NULL DEFAULT 'Hawaii',
  website_url TEXT NOT NULL DEFAULT 'www.jackandsofia.com',
  couple_photo_url TEXT,
  invitation_text TEXT NOT NULL DEFAULT 'Nous avons l''honneur de vous inviter à célébrer notre union dans un cadre magique. Votre présence illuminera cette journée exceptionnelle.',
  rsvp_phone_number TEXT DEFAULT '',
  template TEXT NOT NULL DEFAULT 'modern',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.wedding_details ENABLE ROW LEVEL SECURITY;

-- Create policies for wedding_details table
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

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_wedding_details_updated_at
BEFORE UPDATE ON public.wedding_details
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();