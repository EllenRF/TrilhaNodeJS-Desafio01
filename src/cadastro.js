import inquirer from 'inquirer';
import { usuario } from './services.js'
import { validarCampo } from './services.js'
import { salvarUsuario, verificaEmail, verificaUsername } from '../firebaseServices/firebase.js';
//let listaUsuarios = [];

function cadastroNovoUsuario() {
    setUsername();
}

function setUsername() {
    inquirer
        .prompt([{
            name: 'username',
            message: 'Digite seu username:'
        }])
        .then((resp) => {
            if (validarCampo(resp.username) && verificaUsername(resp.username)) {
                setUsername();
            }
           
            else {
                usuario['username'] = resp.username;
                setEmail();
            }
        })
        .catch((error) => { console.log(error); });
}

function setEmail() {
    inquirer
        .prompt([{
            name: 'email',
            message: 'Digite seu email:'
        }])
        .then((resp) => {
            if (!validarCampo(resp.email) || resp.email.endsWith("@modalgr.com")) {
                if(!verificaEmail(usuario['username'], resp.email))
                usuario['email'] = resp.email;
                setSenha();
            }
            else {
                console.log("É obrigatório ser um email da ModalGr")
                setEmail()
            };
        })
        .catch((error) => { console.log(error); });
}

function setSenha() {
    inquirer
        .prompt([{
            name: 'senha',
            message: 'Digite sua senha:'
        }])
        .then((resp) => {
            if (validarSenha(resp.senha)) {
                usuario['senha'] = resp.senha;
                salvarUsuario(usuario['email'], usuario['senha'], usuario['username']);
            }
            else setSenha();
        })
        .catch((error) => { console.log(error); });
}


function validarSenha(senha) {
    if (senha.length <= 7) {
        console.log("Senha deve ter pelo menos 8 caracteres");
        return false;
    }
    // TESTAR LETRA MAIUSCULA
    if (!(/[A-Z]/.test(senha))) {
        console.log("Senha deve ter pelo menos uma letra maiuscula");
        return false;
    }
    // TESTAR NUMERO
    if (!(/[0-9]/.test(senha))) {
        console.log("Senha deve conter pelo menos um número");
        return false;
    }
    return true;
}

export default cadastroNovoUsuario;
