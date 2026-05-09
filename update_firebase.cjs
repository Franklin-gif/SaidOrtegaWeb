const fs = require('fs');
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");

// Firebase config from src/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyCvwBycAFoS0CqigvI2bsAtQa7KhKyyc8E",
  authDomain: "saidortegweb.firebaseapp.com",
  projectId: "saidortegweb",
  storageBucket: "saidortegweb.firebasestorage.app",
  messagingSenderId: "370126366303",
  appId: "1:370126366303:web:5f835133c4aec0c2935dea",
  measurementId: "G-78N2RW4BWN"
};

async function updateFirebase() {
    console.log("🚀 Iniciando actualización de Firebase con datos de R2...");

    try {
        // 1. Inicializar Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // 2. Leer el archivo migrado
        const backupPath = './backup_migrado_r2.json';
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
