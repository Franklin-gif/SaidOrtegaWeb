/**
 * Image Compressor Utility
 * Compresses and resizes images client-side before uploading.
 * Handles HEIC, WEBP, PNG, JPEG, etc. by converting to JPEG via Canvas.
 */

/**
 * Compress an image file to a target max dimension and quality.
 * @param {File} file - The original image file
 * @param {Object} options
 * @param {number} options.maxWidth - Max width in pixels (default 1200)
 * @param {number} options.maxHeight - Max height in pixels (default 1200)
 * @param {number} options.quality - JPEG quality 0-1 (default 0.8)
 * @param {number} options.maxSizeBytes - Target max file size in bytes (default 2MB)
 * @returns {Promise<File>} - Compressed image as a new File object
 */
export const compressImage = (file, options = {}) => {
    const {
        maxWidth = 1200,
        maxHeight = 1200,
        quality = 0.8,
        maxSizeBytes = 2 * 1024 * 1024 // 2MB
    } = options;

    return new Promise((resolve, reject) => {
        // If file is already small enough and is JPEG, skip compression
        if (file.size <= maxSizeBytes && file.type === 'image/jpeg') {
            return resolve(file);
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            const img = new Image();

            img.onload = () => {
                try {
                    const canvas = document.createElement('canvas');
                    let { width, height } = img;

                    // Calculate new dimensions maintaining aspect ratio
                    if (width > maxWidth || height > maxHeight) {
                        const ratio = Math.min(maxWidth / width, maxHeight / height);
                        width = Math.round(width * ratio);
                        height = Math.round(height * ratio);
                    }

                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d');
                    // Fill white background (for PNGs with transparency)
                    ctx.fillStyle = '#FFFFFF';
                    ctx.fillRect(0, 0, width, height);
                    ctx.drawImage(img, 0, 0, width, height);

                    // Try to get it under maxSizeBytes by reducing quality
                    let currentQuality = quality;
                    const tryCompress = () => {
                        canvas.toBlob(
                            (blob) => {
                                if (!blob) {
                                    return reject(new Error('Canvas toBlob failed'));
                                }

                                if (blob.size > maxSizeBytes && currentQuality > 0.3) {
                                    currentQuality -= 0.1;
                                    tryCompress();
                                    return;
                                }

                                // Create a new File from the blob
                                const compressedName = file.name.replace(/\.[^.]+$/, '') + '.jpg';
                                const compressedFile = new File([blob], compressedName, {
                                    type: 'image/jpeg',
                                    lastModified: Date.now()
                                });

                                console.log(
                                    `Image compressed: ${(file.size / 1024).toFixed(0)}KB → ${(compressedFile.size / 1024).toFixed(0)}KB (quality: ${currentQuality.toFixed(1)})`
                                );

                                resolve(compressedFile);
                            },
                            'image/jpeg',
                            currentQuality
                        );
                    };

                    tryCompress();
                } catch (err) {
                    reject(err);
                }
            };

            img.onerror = () => {
                reject(new Error('Failed to load image for compression'));
            };

            img.src = event.target.result;
        };

        reader.onerror = () => {
            reject(new Error('Failed to read file'));
        };

        reader.readAsDataURL(file);
    });
};
