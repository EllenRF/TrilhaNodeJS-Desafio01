import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import { usuario } from '../src/services.js';

const firebaseConfig = {
    apiKey: "AIzaSyDvafoj8hd16GRa-_8Fnfq-jmPCKnOzkS0",
    authDomain: "desafio01-eabe8.firebaseapp.com",
    projectId: "desafio01-eabe8",
    storageBucket: "desafio01-eabe8.appspot.com",
    messagingSenderId: "121695439553",
    appId: "1:121695439553:web:92d4216b0e011729136240",
    measurementId: "G-F5J37KZ1ZK"
};

// Initialize Firebase
function iniciarFirebase() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return db;
}

const usuariosRef = collection(iniciarFirebase(), "usuarios");

async function salvarUsuario(email, senha, username) {
    await setDoc(doc(usuariosRef, username), {
        email: email,
        senha: senha
    }, { merge: true });
    console.log(`${email} cadastradado!`);
    return;
}

async function leDadosUsuario(username, senha) {
    try {
        const docRef = doc(usuariosRef, username);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            console.log(`${username} não encontrado`)
            return;
        }
        else {
            if (docSnap.data().senha === senha) {
                console.log(`Seja bem vindo ${docSnap.id} :D`)
            }
        }
    }
    catch (err) { (err) => console.log(err) }
    return;
}

async function verificaUsername(username) {
    try {
        const docRef = doc(usuariosRef, username)
        //getDoc serve para providenciar os conteudos do documento referênciado
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(`${username} já existente. Digite outro`);
            return true;
        }
        else return false;
    }
    catch (err) { (err) => console.log(err) }

}

async function verificaEmail(emailUsuario) {
    //getDocs executa uma query sobre os documentos da coleção. Não confundir com getDoc
    const querySnap = await getDocs(usuariosRef);
    let vEmail = false;
    querySnap.forEach((doc) => {
        if (doc.data().email == emailUsuario) {
            console.log(`\n ${emailUsuario} já existente. Digite outro`);
            vEmail = true;
        }
    });

    return vEmail;
}
export { salvarUsuario, iniciarFirebase, leDadosUsuario, verificaUsername, verificaEmail }