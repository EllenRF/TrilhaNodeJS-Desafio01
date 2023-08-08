import cadastroNovoUsuario from './cadastro.js';
import inquirer from 'inquirer';
import { iniciarFirebase, todosUsuarios } from '../firebaseServices/firebase.js';
import { logarUsuario } from './login.js';

iniciarFirebase();
//import usuarios from '../usuarios.json' assert { type: 'json' };
/* import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, addDoc } from 'firebase/firestore';

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//const usuarios = collection(db, 'usuarios');


export async function salvarUsuario(email, senha) {
   const docRef = addDoc(collection(db, 'usuarios'), {email, senha });
    console.log('Deu certo :) ');
}

 */
inquirer.prompt(
    [{
        name: 'navegacao',
        message: '1- Login de Usuario \r\n  2- Cadastrar novo Usuario'
    }]
).then((answer) => {
    // while(answer.navegacao != 1 || answer.navegacao != 2){
    switch (answer.navegacao) {
        case '1':
            todosUsuarios();
            break;
        case '2':
            cadastroNovoUsuario();
            break;
    }
    //} 
}).catch((err) => console.log(err))
