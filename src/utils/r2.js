/**
 * R2 Upload Utility with Cloudinary fallback
 * Tries R2 first, falls back to Cloudinary if R2 fails.
 */

import { uploadToCloudinary } from './cloudinary';

// CONFIGURACIÓN (Desde variables de entorno de Vite)
const WORKER_URL = import.meta.env.VITE_WORKER_URL || "https://said-web-uploader.saidortega102004.workers.dev";
const R2_AUTH_KEY = import.meta.env.VITE_R2_AUTH_KEY || "said_secure_auth_key_2026";

/**
 * Upload to R2 via Cloudflare Worker
 */
const uploadToR2Worker = async (file) => {
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("key", fileName);

    const response = await fetch(`${WORKER_URL}/upload`, {
        method: "POST",
        headers: {
            "X-Auth-Key": R2_AUTH_KEY
        },
        body: formData,
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`R2 upload failed (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    return data.url;
};

/**
 * Smart upload: tries R2 first, then falls back to Cloudinary.
 * @param {File} file - The file to upload (should already be compressed)
 * @returns {Promise<string>} - The public URL of the uploaded image
 */
export const uploadToR2 = async (file) => {
    if (!file) return null;

    // Try R2 first
    try {
        console.log("Attempting R2 upload...");
        const url = await uploadToR2Worker(file);
        console.log("R2 upload successful:", url);
        return url;
    } catch (r2Error) {
        console.warn("R2 upload failed, falling back to Cloudinary:", r2Error.message);
    }

    // Fallback to Cloudinary
    try {
        console.log("Attempting Cloudinary upload...");
        const url = await uploadToCloudinary(file);
        console.log("Cloudinary upload successful:", url);
        return url;
    } catch (cloudinaryError) {
        console.error("Cloudinary upload also failed:", cloudinaryError.message);
        throw new Error("No se pudo subir la imagen a ningún servidor. Intenta de nuevo.");
    }
};
