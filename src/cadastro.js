//import usuario from './Usuario.js';
import inquirer from 'inquirer';
import fs from 'fs';
import usuarios from '../usuarios.json' assert { type: 'json' };
import validarCampo from '../services/services.js';

let listaUsuarios = [];

 const usuario = {
    nome: "",
    username: "",
    senha: "",
    email: ""
} 

function cadastroNovoUsuario() {
     if(usuarios?.length){
        listaUsuarios.push(...usuarios);
    } 
    setNome();
}

function serializaUsuario(){
    listaUsuarios.push(usuario);
    const jsonUsuarios = JSON.stringify(listaUsuarios);
    fs.writeFileSync('usuarios.json', jsonUsuarios);
    console.log(`Usuario ${usuario['username']} cadastrado com sucesso`);
    
} 

function setNome() {
    inquirer
    .prompt([{
        name: 'nome',
        message: 'Digite seu nome:'
    }])
    .then((resp) => {
        if (validarCampo(resp.nome)){
            usuario['nome'] = resp.nome;
            setUsername();
        } 
        else setNome(); 
    })
    .catch((error) => { console.log(error); });
}

function setUsername() {
    inquirer
    .prompt([{
        name: 'username',
        message: 'Digite seu username:'
    }])
    .then((resp) => {       
        if (validarCampo(resp.username)){
            usuario['username'] = resp.username;
            setEmail();
        } 
        else setUsername(); 
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
        if (validarCampo(resp.email)){
            usuario['email'] = resp.email;
            setSenha();
        } 
        else setEmail(); 
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
        if(validarSenha(resp.senha)){
            usuario['senha'] =  resp.senha; 
            serializaUsuario();
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
