function validarCampo(campo){
    if(!campo?.length){
        console.log("Campo obrigatorio");
        return false;
    }
    else return true;
}
