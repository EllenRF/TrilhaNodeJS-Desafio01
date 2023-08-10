function campoVazio(campo) {
    if (!campo.length) {
        console.log("Campo obrigatorio");
        return true;
    }
     return false;
}

const usuario = {
    email: "",
    senha: "",
    apelido: ""
}

export { campoVazio, usuario }