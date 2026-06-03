require('dotenv').config();
const fs = require('fs');
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs, addDoc } = require("firebase/firestore");

// Firebase config
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
};

async function migrateTestimonials() {
    console.log("🚀 Iniciando migración de testimonios históricos a la nueva colección Firestore...");

    try {
        // 1. Inicializar Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // 2. Leer el archivo de backup
        const backupPath = './backups/backup_migrado_r2.json';
        if (!fs.existsSync(backupPath)) {
            throw new Error(`No se encontró el archivo ${backupPath}. Asegúrate de que el archivo exista.`);
        }

        const backupContent = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
        const testimonialsList = backupContent.data?.sections?.testimonials?.list || [];

        if (testimonialsList.length === 0) {
            console.log("ℹ️ No hay testimonios en el archivo de backup para migrar.");
            process.exit(0);
        }

        // 3. Verificamos si la colección de testimonios ya tiene datos
        console.log("⏳ Verificando colección de testimonios en Firestore...");
        const testimonialsRef = collection(db, 'testimonials');
        const testimonialsSnap = await getDocs(testimonialsRef);

        if (!testimonialsSnap.empty) {
            console.log("ℹ️ La colección 'testimonials' ya contiene datos. Omitiendo migración para evitar duplicados.");
            process.exit(0);
        }

        // 4. Escribimos los testimonios del backup
        console.log(`⏳ Migrando ${testimonialsList.length} testimonios a la colección dedicada...`);
        for (const t of testimonialsList) {
            await addDoc(testimonialsRef, {
                name: t.name,
                text: t.text,
                photo: t.photo || "",
                photoWithSaid: t.photoWithSaid || "",
                createdAt: new Date().toISOString()
            });
            console.log(`  - Testimonio de "${t.name}" migrado.`);
        }

        console.log("✅ ¡Migración completada con éxito!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Error durante la migración de testimonios:", error);
        process.exit(1);
    }
}

migrateTestimonials();
