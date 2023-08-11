import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import { configDotenv} from 'dotenv'

configDotenv()

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Inicia Firebase
function iniciarFirebase() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return db;
}

const usuariosRef = collection(iniciarFirebase(), "usuarios");

async function salvarUsuario({ email, senha, apelido }) {
    await setDoc(doc(usuariosRef, apelido), {
        email: email,
        senha: senha
    }, { merge: true });
    console.log(`${email} cadastradado!`);
    process.exit();
}

async function leDadosUsuario(apelido, senha) {
    try {
        const docRef = doc(usuariosRef, apelido);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists() || docSnap.data().senha !== senha ) {       
            console.log("Apelido ou senha inválidos");
            process.exit();
        }
        console.log(`Seja bem vindo ${docSnap.id} :D`);
        process.exit();
        
    }
    catch (err) { (err) => console.log(err) }
}

async function apelidoExistente(apelido) {
    try {
        let existeApelido = false
        const docRef = doc(usuariosRef, apelido)
        //getDoc serve para providenciar os conteudos do documento referênciado
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(`${apelido} já existente. Digite outro`);
            existeApelido = true;
        }
        return existeApelido;
    }
    catch (err) { (err) => console.log(err) }

}

async function emailExistente(emailUsuario) {
    try {

        //getDocs executa uma query sobre os documentos da coleção. Não confundir com getDoc
        const querySnap = await getDocs(usuariosRef);
        let emailExiste = false;
        querySnap.forEach((doc) => {
            if (doc.data().email == emailUsuario) {
                console.log(`\n ${emailUsuario} já existente. Digite outro`);
                emailExiste = true;
            }
        });
        return emailExiste;
    } catch (err) { (err) => console.log(err) }

}
export { salvarUsuario, iniciarFirebase, leDadosUsuario, apelidoExistente, emailExistente }