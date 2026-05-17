const fs = require('fs');
const axios = require('axios');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
require('dotenv').config();

// CONFIGURACIÓN (Desde .env)
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

async function migrate() {
    console.log("🚀 Iniciando migración de Cloudinary a R2...");
    
    const backupPath = './backups/backup_total_said.json';
    const backup = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
    let dataStr = JSON.stringify(backup);

    // Encontrar todas las URLs de Cloudinary
    const cloudinaryRegex = /https:\/\/res\.cloudinary\.com\/[^\s"']+/g;
    const urls = dataStr.match(cloudinaryRegex) || [];
    const uniqueUrls = [...new Set(urls)];

    console.log(`📦 Encontradas ${uniqueUrls.length} imágenes únicas.`);

    for (const url of uniqueUrls) {
        try {
            console.log(`⏳ Procesando: ${url}`);
            
            // 1. Descargar
            const response = await axios.get(url, { responseType: 'arraybuffer' });
            const buffer = Buffer.from(response.data, 'utf-8');
            
            // 2. Preparar nombre
            const fileName = url.split('/').pop();
            
            // 3. Subir a R2
            await s3.send(new PutObjectCommand({
                Bucket: config.bucket,
                Key: `migrated/${fileName}`,
                Body: buffer,
                ContentType: response.headers['content-type']
            }));

            // 4. Reemplazar en el JSON
            const newUrl = `${config.publicUrl}/migrated/${fileName}`;
            dataStr = dataStr.split(url).join(newUrl);
            
            console.log(`✅ Migrado a: ${newUrl}`);
        } catch (err) {
            console.error(`❌ Error con ${url}:`, err.message);
        }
    }

    fs.writeFileSync('./backups/backup_migrado_r2.json', dataStr);
    console.log("\n✨ Migración completada. Nuevo archivo: backups/backup_migrado_r2.json");
}

migrate();
