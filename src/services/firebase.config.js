// Importações do Firebase (versão modular - SDK 9+)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuração do seu projeto (substitua com seus dados!)
const firebaseConfig = {
  apiKey: "AIzaSyDaZoDSoZszgAcSN8ydXX01h7Eil8xmsQA", // Chave de API única do projeto
  authDomain: "orbitalvortex-32ecc.firebaseapp.com", // Domínio de autenticação
  projectId: "orbitalvortex-32ecc", // ID do projeto (não alterável)
  storageBucket: "orbitalvortex-32ecc.firebasestorage.app", // Armazenamento de arquivos
  messagingSenderId: "11126730021", // ID para notificações
  appId: "1:11126730021:web:9d3922b5bbf4aac3a9fecc", // ID do aplicativo  
  measurementId: "G-355FGTRKEL"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços que você vai usar
export const db = getFirestore(app); // Firestore (banco de dados)
export const auth = getAuth(app); // Autenticação
