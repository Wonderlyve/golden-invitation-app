-- Create storage bucket for couple photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('couple-photos', 'couple-photos', true);

-- Create RLS policies for couple-photos bucket
CREATE POLICY "Users can upload their own couple photos"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'couple-photos' AND auth.uid()::text = (storage.foldername(name))[1] OR bucket_id = 'couple-photos');

CREATE POLICY "Anyone can view couple photos"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'couple-photos');

CREATE POLICY "Users can update their own couple photos"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'couple-photos' AND auth.uid()::text = (storage.foldername(name))[1] OR bucket_id = 'couple-photos');

CREATE POLICY "Users can delete their own couple photos"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'couple-photos' AND auth.uid()::text = (storage.foldername(name))[1] OR bucket_id = 'couple-photos');