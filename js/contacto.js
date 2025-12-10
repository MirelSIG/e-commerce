 
 
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

    result.innerHTML = `<h3 style="color:white;">Mensajes recibidos:</h3>`; 
    mensajes.forEach((m, index) => {
        result.innerHTML += `
            <div class="msg">
                <p><strong>Nombre:</strong> ${m.nombre}</p>
                <p><strong>Correo:</strong> ${m.correo}</p>
                <p><strong>Teléfono:</strong> ${m.telefono || "—"}</p>
                <p><strong>Mensaje:</strong> ${m.mensaje}</p>  
                <p><strong>Fecha:</strong> ${m.fecha}</p>

                <button onclick="deleteMsg(${index})" class="delete-btn">🗑 Eliminar</button>
                <hr>
            </div>
        `;
    });
}

function deleteMsg(index) {
    let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

    mensajes.splice(index, 1);

    localStorage.setItem("mensajes", JSON.stringify(mensajes));

    mostrarMensajes();
}

function deleteAll() {
    localStorage.removeItem("mensajes");
    mostrarMensajes();
}