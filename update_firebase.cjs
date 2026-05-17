require('dotenv').config();
const fs = require('fs');
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");

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

async function updateFirebase() {
    console.log("🚀 Iniciando actualización de Firebase con datos de R2...");

    try {
        // 1. Inicializar Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // 2. Leer el archivo migrado
        const backupPath = './backups/backup_migrado_r2.json';
        if (!fs.existsSync(backupPath)) {
            throw new Error(`No se encontró el archivo ${backupPath}. Ejecuta primero la migración.`);
        }

        const backupContent = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
        const newData = backupContent.data;

        if (!newData) {
            throw new Error("El archivo de backup no contiene la propiedad 'data'.");
        }

        // 3. Subir a Firestore
        console.log("⏳ Subiendo datos a Firestore (web_data/said_web)...");
        const docRef = doc(db, 'web_data', 'said_web');
        
        await setDoc(docRef, newData);

        console.log("✅ ¡Éxito! La base de datos ha sido actualizada.");
        console.log("🔗 Las imágenes ahora se cargan desde Cloudflare R2.");
        
        process.exit(0);
    } catch (error) {
        console.error("❌ Error actualizando Firebase:", error);
        process.exit(1);
    }
}

updateFirebase();
