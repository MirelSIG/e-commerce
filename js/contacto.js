const form = document.getElementById("contactForm");
const result = document.getElementById("result");
   

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = form.nombre.value;
    const correo = form.correo.value;
    const telefono = form.telefono.value;
    const mensaje = form.mensaje.value;

    const data = {
        nombre,
        correo,
        telefono,
        mensaje,
        fecha: new Date().toLocaleString()
    };

    let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

    mensajes.push(data);

    localStorage.setItem("mensajes", JSON.stringify(mensajes));

    form.reset();

    mostrarMensajes();
});
function mostrarMensajes() {
    const mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

    result.innerHTML = `<h3 style="color:red;">Su mensaje a sido enviado <i class="fa-regular fa-thumbs-up"></i></h3>`; 
}

