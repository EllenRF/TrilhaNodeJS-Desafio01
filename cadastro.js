import user  from './Usuario.js';
import inquirer from 'inquirer';
import fs from 'fs';
import usuarios from './usuarios.json' assert { type: 'json' };

function cadastroNovoUsuario(){

    let listaUsuarios = [];
    
    if(!usuarios?.length){
        let usuario = usuarios?.nome ? usuarios : null;
        if(usuario){
            listaUsuarios.push(usuario)
        }
    }
    else{
        listaUsuarios.push(...usuarios)
    }
    
    inquirer
      .prompt([
        {
            name: 'nome',
            message: 'qual seu nome?'
        },
        {
            name: 'user',
            message: 'qual seu user?'
        },
        {
            name: 'email',
            message: 'qual seu email?'
        },
        {
            name: 'senha',
            message: 'qual sua senha?',
        },
    
      ])
      .then((answers) => {
        user['nome'] = answers.nome;
        user['user'] = answers.user;
        user['email'] = answers.email;
        user['senha'] = answers.senha;
    
        listaUsuarios.push(user);
        const jsonUsuarios = JSON.stringify(listaUsuarios); 
        fs.writeFileSync('usuarios.json', jsonUsuarios);
    
        console.log(user);
    
        // INSERIR MENSAGEM DE CONCLUSÃO DE CADASTRO
    })
      .catch((error) => {
       console.log(error)
      });
}

export default cadastroNovoUsuario;
