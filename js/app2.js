// - Const/Getters

const botonInicio = document.getElementById("boton_inicio");
const correoInicio = document.getElementById("correo_usuario_inicio");
const contraseñaInicio = document.getElementById("contraseña_usuario_inicio");

// - Evento / Boton iniciar sesion

botonInicio.addEventListener("click", function () {
    let correoInicio = localStorage.getItem("correo");
    let contraseñaInicio = localStorage.getItem("contraseña");

    if (correoInicio === correo_usuario_inicio.value & contraseñaInicio === contraseña_usuario_inicio.value){
        document.body.innerHTML = `<h1>Iniciaste sesion</h1>`;
    }

    else if (correoInicio !== correo_usuario_inicio.value || contraseñaInicio !== contraseña_usuario_inicio.value){
        document.body.innerHTML = `<h1>No iniciaste sesion</h1>`;
    }
})