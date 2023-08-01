const user = require('./Usuario');
const fs = require("fs")
const readline = require("readline").createInterface({
    input: process.input,
    output: process.stdout
})

fs.readFile("Usuarios.json", data, (error) => { 
    if (error) {
     fs.writeFile("Usuarios.json");
      console.error(error);
    }}
)
readline.question("1- Login de Usuario \r\n 2- Cadastrar novo Usuario", (answer) => {
    while(answer != "1" || answer != "2"){
        console.log("Resposta não aceita. Digite apenas 1 ou 2")
    }
        switch(answer){
            case '1':
    
            break;
            case'2':
    
            break;
        }
    
})

//function loginUsuario(usuario) =>
