
  const form = document.getElementById("checkoutForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const cliente = {
      nombre: document.getElementById("fname").value,
      email: document.getElementById("email").value
    };

    const pedido = {
      direccion: document.getElementById("adr").value,
      ciudad: document.getElementById("city").value,
      estado: document.getElementById("state").value,
      zip: document.getElementById("zip").value,
      nombreTarjeta: document.getElementById("cname").value,
      numeroTarjeta: document.getElementById("ccnum").value,
      expMonth: document.getElementById("expmonth").value,
      expYear: document.getElementById("expyear").value,
      cvv: document.getElementById("cvv").value
    };

    
    // Obtener clientes guardados
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];


    // Comprobar si el email ya existe
  const emailExiste = clientes.some(c => c.email === cliente.email);

  if (emailExiste) {
    alert("Este email ya ha sido registrado. Por favor usa otro.");
    return; // No guardar ni continuar
  }
    // Guardar el cliente
    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));


    // Guardar el pedido
    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));   
  });

  console.log(localStorage.getItem("clientes"));
  console.log(localStorage.getItem("pedidos"));

