// - Const / Gets.

const nombre = document.getElementById("nombre_usuario");
const apellido = document.getElementById("apellido_usuario");
const dni = document.getElementById("dni_usuario");
const correo = document.getElementById("correo_usuario");
const contraseña = document.getElementById("contraseña_usuario");
const boton = document.getElementById("boton");

// Fetch.

fetch('https://timezone.abstractapi.com/v1/current_time/?api_key=61fac29881ba47769f78930fd5997224&location=Buenos Aires, Argentina')
    .then(response => response.json())
    .then(data => {
        let timezoneContent = document.getElementById("timezoneContent");
        timezoneContent.innerHTML = `<h2>Abrimos de Lunes a Viernes de 8:00am a 22:00pm.</h2> <span>Hoy es: ${data.datetime}</span>`;
    })

// - Array / Lista de usuarios.

let lista_usuarios = [];

// - Evento / Boton de inscribirse.

boton.addEventListener("click", function (e) {
    e.preventDefault();

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
    }
    localStorage.setItem("correo", correo.value);
    localStorage.setItem("contraseña", contraseña.value);

    document.body.innerHTML =
    `
    <nav class="navbar">
    <img class="logo" src="../img/neosportimg2.png">
    <div class="nav-links">
        <ul>
            <li class="active"><a href="../index.html">Inicio</a></li>
            <li><a href="">Nosotros</a></li>
            <li><a href="">Servicios</a></li>
        </ul>
    </div>
    <a href="../pages/iniciosesion.html"><button class="botonNav">Iniciar Sesión</button></a>
    <img src="../img/menuboton.png" alt="menu hamburger" class="menu-hamburger">
</nav>
    <header>
    <div class="contenedorTitulos">
    <h1 class="tituloAgradecimiento">${nombre.value}, Gracias por confiar en <span class="confirmacionEdit">NEO SPORT</span></h1>
    <h2 class="tituloEnlace">Dirigete a <a href="../index.html">Inicio</a> o Inicia sesión en <a href="../pages/iniciosesion.html">Click aca</a>.</h2></div>
    </header>
    `;
})