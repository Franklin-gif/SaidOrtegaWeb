import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

/**
 * R2 Upload Utility
 * Note: In a production environment, you should use a Cloudflare Worker 
 * to generate pre-signed URLs instead of putting secrets in the frontend.
 */

// CONFIGURACIÓN (Desde variables de entorno de Vite en Cloudflare)
const WORKER_URL = import.meta.env.VITE_WORKER_URL;
const R2_AUTH_KEY = import.meta.env.VITE_R2_AUTH_KEY;

export const uploadToR2 = async (file) => {
    if (!file) return null;

    // Generamos un nombre único para el archivo
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
    
    try {
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
            throw new Error(`Upload to R2 failed: ${errorText}`);
        }

        const data = await response.json();
        return data.url; 
    } catch (error) {
        console.error("Error uploading to R2:", error);
        throw error;
    }
};
