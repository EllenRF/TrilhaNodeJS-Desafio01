import user  from './Usuario.js';
import inquirer from 'inquirer';
import fs from 'fs';
import usuarios from './usuarios.json' assert { type: 'json' };

function cadastroNovoUsuario(){

    let listaUsuarios = [];

    if(!usuarios?.length){
        let usuario = usuarios?.nome ? usuarios : null;
        if(usuario){
            listaUsuarios.push(usuario);
        }
    }
    else{
        listaUsuarios.push(...usuarios);
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
        }
      ])
      .then((respostas) => {
        user['nome'] = respostas.nome;
        user['user'] = respostas.user;
        user['email'] = respostas.email;
       
        if(getSenha()){
            listaUsuarios.push(user);
            const jsonUsuarios = JSON.stringify(listaUsuarios); 
            fs.writeFileSync('usuarios.json', jsonUsuarios);
            console.log(`Usuario ${user['user']} cadastrado com sucesso`);
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

console.log("Usuario cadastrado com sucesso!");

function getSenha(){inquirer
.prompt([{
    name: 'senha',
    message: 'Digite sua senha:'
}])
.then((resp) =>{
    if(!validarSenha(resp.senha)){
        getSenha();
        return false;
    }
    else{
        user['senha'] = resp.senha;
        return true;
    }
})
.catch((error) => {console.log(error);});
}

    function validarSenha(senha){
    if(senha.length <= 7){
    console.log("Senha deve ter pelo menos 8 caracteres");
    return false;
}
    if(!(/[A-Z]/.test(senha))){
    console.log("Senha deve ter pelo menos uma letra maiuscula");
    return false;
}
    if(!(/[0-9]/.test(senha))){
    console.log("Senha deve conter pelo menos um número");
    return false;
}
    return true;
}

export default cadastroNovoUsuario;
