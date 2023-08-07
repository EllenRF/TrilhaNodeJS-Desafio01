import inquirer from 'inquirer';
import {validarCampo, usuario} from './services.js'
import fs from 'fs';
import usuarios from '../usuarios.json' assert { type: 'json' };

function logarUsuario(){
    inquirer
    .prompt([{
        name: 'usuarioNome',
        message: 'Digite seu username:'
    }])
    .then((resp) => {
      if(validarCampo(resp.usuarioNome)){
        logarSenha()
      }
    })
    .catch((err) => {console.log(err)})
}
function logarSenha(){
    inquirer
    .prompt([{
        name: 'usuarioSenha',
        message: 'Digite sua senha:'
    }])
    .then((resp) => {
        if(validarCampo(resp.usuarioSenha)){}
    })
    .catch((err) => {console.log(err)})
}