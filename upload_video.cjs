const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
require('dotenv').config();

const config = {
    accountID: process.env.R2_ACCOUNT_ID,
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    bucket: process.env.R2_BUCKET_NAME,
    publicUrl: process.env.R2_PUBLIC_URL
};

const s3 = new S3Client({
    region: "auto",
    endpoint: `https://${config.accountID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
    },
});

async function uploadVideo() {
    console.log("🚀 Iniciando subida de video a Cloudflare R2...");
    
    const videoDir = path.join(__dirname, 'public', 'VideoCandidatura');
    if (!fs.existsSync(videoDir)) {
        console.error("❌ La carpeta public/VideoCandidatura no existe.");
        process.exit(1);
    }
    
    const files = fs.readdirSync(videoDir);
    const videoFile = files.find(file => file.endsWith('.mp4'));
    
    if (!videoFile) {
        console.error("❌ No se encontró ningún archivo .mp4 en public/VideoCandidatura/");
        process.exit(1);
    }
    
    const localPath = path.join(videoDir, videoFile);
    console.log(`🎥 Archivo detectado: ${videoFile} (${(fs.statSync(localPath).size / (1024 * 1024)).toFixed(2)} MB)`);
    
    try {
        const fileStream = fs.createReadStream(localPath);
        const fileKey = `VideoCandidatura/SAID_O.mp4`; // Usar nombre limpio para la URL pública
        
        console.log(`⏳ Subiendo a R2 (bucket: ${config.bucket}, key: ${fileKey})...`);
        
        await s3.send(new PutObjectCommand({
            Bucket: config.bucket,
            Key: fileKey,
            Body: fs.readFileSync(localPath), // Leer el buffer completo
            ContentType: 'video/mp4'
        }));
        
        const finalUrl = `${config.publicUrl}/${fileKey}`;
        console.log(`\n✅ ¡Subida completada con éxito!`);
        console.log(`🔗 URL Pública del Video: ${finalUrl}`);
        
    } catch (err) {
        console.error("❌ Error al subir el video a R2:", err.message);
        process.exit(1);
    }
}

uploadVideo();
