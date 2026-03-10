/**
 * Cloudinary Upload Utility
 * Handles unsigned uploads to Cloudinary
 */

const CLOUD_NAME = "dglfvfiix";
const UPLOAD_PRESET = "testimonios_preset"; // Using the same preset for now, adjust if needed

export const uploadToCloudinary = async (file, resourceType = "image") => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("cloud_name", CLOUD_NAME);

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || "Upload failed");
        }

        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error(`Error uploading ${resourceType} to Cloudinary:`, error);
        throw error;
    }
};
