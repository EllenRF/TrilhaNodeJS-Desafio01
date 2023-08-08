function validarCampo(campo) {
    if (!campo.length) {
        console.log("Campo obrigatorio");
        return true;
    }
    else return false;
}

const usuario = {
    email: "",
    senha: "",
    username: ""
}

export { validarCampo, usuario }