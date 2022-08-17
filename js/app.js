// - Const/Getters

const nombre = document.getElementById("nombre_usuario");
const apellido = document.getElementById("apellido_usuario");
const dni = document.getElementById("dni_usuario");
const correo = document.getElementById("correo_usuario");
const contraseña = document.getElementById("contraseña_usuario");
const boton = document.getElementById("boton");

// - Array/Lista de usuarios

let lista_usuarios = [];

// - Evento / Boton de inscribirse

boton.addEventListener("click", function () {
    for (let i = 0; i < 1; i++) {
        class Usuario {
            constructor(nombre, apellido, dni, correo) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.dni = dni;
                this.correo = correo;
            }
        }
        let nuevo_usuario = new Usuario(nombre.value, apellido.value, dni.value, correo.value);
        lista_usuarios.push(nuevo_usuario);
        console.log(lista_usuarios);
    }

    localStorage.setItem("correo", correo.value);
    localStorage.setItem("contraseña", contraseña.value);

    document.body.innerHTML = `<div class="contenedorTitulos">
    <h1 class="tituloAgradecimiento">${nombre.value}, Gracias por confiar en <span class="confirmacionEdit">NEO SPORT</span></h1>
    <h2 class="tituloEnlace">Dirigete a <a href="../index.html">Inicio</a> o Inicia sesión en <a href="../pages/iniciosesion.html">Click aca</a>.</h2></div>`;
})

// Fetch

/*
fetch('https://timezone.abstractapi.com/v1/current_time/?api_key=61fac29881ba47769f78930fd5997224&location=Buenos Aires, Argentina')
    .then(response => response.json())
    .then(data => {
        let timezoneContent = document.getElementById("timezoneContent");
        timezoneContent.innerHTML = `Abrimos de Lunes a Viernes de 8:00am a 22:00pm, hoy es: ${data.datetime}`;
    })
*/

// - Evento / Pagar meses

/*
boton.addEventListener("click", function () {
    if (meses == 3) {
        let multiplicacion = meses * 4000;
        document.body.innerHTML = `<div class="contenedorTitulos">
            <h1 class="tituloAgradecimiento">${nombre.value}, Gracias por confiar en <span class="confirmacionEdit">NEO SPORT</span></h1>`;
    }
    else if (meses == 6) {
        let multiplicacion = meses * 3500;
        document.body.innerHTML = `<div class="contenedorTitulos">
            <h1 class="tituloAgradecimiento">${nombre.value}, Gracias por confiar en <span class="confirmacionEdit">NEO SPORT</span></h1>`;
    }
    else {
        let multiplicacion = meses * 5500;
        document.body.innerHTML = `<div class="contenedorTitulos">
            <h1 class="tituloAgradecimiento">${nombre.value}, Gracias por confiar en <span class="confirmacionEdit">NEO SPORT</span></h1>`;
    }
})
*/