# E-commerce

## 1. Arquitectura modular

El proyecto está organizado por componentes reutilizables: `header`, `navbar`, `footer`, `cart`, `products`.

Cada componente tiene su propio archivo JavaScript (lógica) y CSS (estilos), lo que permite escalabilidad y un mantenimiento más limpio.


---

## 2. Separación de responsabilidades

- `main.js` orquesta la aplicación: carga datos, inicializa componentes y gestiona eventos.
- `products.js` se encarga de obtener y renderizar los productos.
- `cart.js` y `controller.js` gestionan el carrito de compras.

Este enfoque sigue el principio de **Single Responsibility**: cada módulo hace una sola cosa y la hace bien.

---

## 3. Renderizado dinámico

Los productos no están escritos directamente en HTML, sino que se generan dinámicamente a partir de un archivo JSON.

Esto permite que el catálogo sea **escalable y mantenible**: solo necesita modificar el JSON para actualizar el contenido.

> Una habilidad clave para cualquier *frontend developer*.

---

## 4. Estilos desacoplados

Se ha modularizado el CSS en archivos como `catalogo.component.css`.

Esto prepara para usar frameworks modernos como **React**, **Vue** o **Svelte**, donde los estilos también se encapsulan por componente.

---

## 5. Eventos y DOM

Se utiliza `addEventListener` para manejar interacciones como búsquedas o clics en el carrito.

> Esta es la base de cualquier aplicación interactiva: **escuchar al usuario y responder dinámicamente**.
