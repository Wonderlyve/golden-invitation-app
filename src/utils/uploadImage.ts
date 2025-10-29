import { supabase } from '@/integrations/supabase/client';

export const uploadCouplePhoto = async (blob: Blob): Promise<string> => {
  try {
    const fileName = `couple-${Date.now()}.jpg`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from('couple-photos')
      .upload(filePath, blob, {
        contentType: 'image/jpeg',
        upsert: false
      });

    if (error) {
      console.error('Error uploading image:', error);
      throw error;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('couple-photos')
      .getPublicUrl(data.path);

    return publicUrl;
  } catch (error) {
    console.error('Error in uploadCouplePhoto:', error);
    throw error;
  }
};
