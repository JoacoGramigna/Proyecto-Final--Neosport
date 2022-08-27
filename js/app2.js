// - Const / Gets.

const botonInicio = document.getElementById("boton_inicio");
const correoInicio = document.getElementById("correo_usuario_inicio");
const contraseñaInicio = document.getElementById("contraseña_usuario_inicio");

// - Evento / Boton iniciar sesion.

botonInicio.addEventListener("click", function (e) {
    e.preventDefault();

    let correoInicio = localStorage.getItem("correo");
    let contraseñaInicio = localStorage.getItem("contraseña");

    if (correoInicio === correo_usuario_inicio.value & contraseñaInicio === contraseña_usuario_inicio.value) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '<h4>Iniciaste sesion</h4>',
            showConfirmButton: true,
            timer: 3000
        })
    }
    else if (correoInicio === correo_usuario_inicio.value & contraseñaInicio !== contraseña_usuario_inicio.value) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: '<h4>Contraseña incorrecta vuelve a intentarlo</h4>',
            showConfirmButton: true,
            timer: 3000
        })
    }
    else if (correoInicio !== correo_usuario_inicio.value || contraseñaInicio !== contraseña_usuario_inicio.value) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: '<h4>Correo invalido o necesitas <a href="../pages/inscripcion.html">inscribirte</a>.</h4>',
            showConfirmButton: true,
            timer: 3000
        })
    }
})