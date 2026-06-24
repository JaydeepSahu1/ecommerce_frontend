export const uploadToCloudinary = async (file: File): Promise<string> => {
  const cloudName = "dgxmjnjxq";
  const uploadPreset = "ml_default";

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", uploadPreset);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );

  const uploadedImage = await res.json();
  console.log("Cloudinary upload response:", uploadedImage);

  if (!res.ok) {
    throw new Error(uploadedImage?.error?.message || "Image upload failed");
  }

  return uploadedImage.secure_url;
};