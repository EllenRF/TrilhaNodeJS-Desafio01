function validarCampo(campo){
    if(!campo.length){
        console.log("Campo obrigatorio");
        return false;
    }
    else return true;
}

const usuario = {
    email: "",
    senha: ""
} 

export {validarCampo, usuario}