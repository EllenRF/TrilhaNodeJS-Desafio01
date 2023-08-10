import inquirer from 'inquirer';
import { campoVazio, usuario } from './services.js'
import { apelidoExistente, emailExistente, salvarUsuario } from '../firebaseServices/firebase.js';


function iniciarCadastro() {
    inquirer
        .prompt([{
            name: 'apelido',
            message: 'Digite um apelido:'
        }])
        .then(async (resp) => {

            if (campoVazio(resp.apelido) || await apelidoExistente(resp.apelido)) {
                // Pergunta novamente o apelido
                iniciarCadastro();
                return;
            }
            usuario['apelido'] = resp.apelido;
            setEmail();
        })
        .catch((error) => { console.log(error); });
}

function setEmail() {
    inquirer
        .prompt([{
            name: 'email',
            message: 'Digite seu email:'
        }])
        .then(async (resp) => {

            const existeEmail = await emailExistente(resp.email)
            if (campoVazio(resp.email) || !resp.email.endsWith("@modalgr.com.br")) {
                console.log("É obrigatório ser um email da ModalGr")
                setEmail();
            }
            else if (existeEmail) {
                setEmail();
                return;
            }

            usuario['email'] = resp.email;
            setSenha();
        })
        .catch((error) => { console.log(error); });
}

function setSenha() {
    inquirer
        .prompt([{
            name: 'senha',
            message: 'Digite sua senha:',
            type: 'password',
            mask: '*'
        }])
        .then((resp) => {
            const senhaValidada = validarSenha(resp.senha)
            if (senhaValidada) {
                usuario['senha'] = resp.senha;
                salvarUsuario(usuario);
                return;
            }
            setSenha();
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

export default iniciarCadastro;
