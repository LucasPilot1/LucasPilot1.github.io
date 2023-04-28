const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

function cargarProductosCarrito() {
  if (productosEnCarrito) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "";

    const categorias = {};

    productosEnCarrito.forEach(producto => {
      if (!categorias[producto.categoria.nombre]) {
        categorias[producto.categoria.nombre] = [];
      }
      categorias[producto.categoria.nombre].push(producto);
    });

    let carritoTexto = '';
    for (const categoria in categorias) {
      const productosCategoria = categorias[categoria];
      carritoTexto += `${categoria}\n`;
      productosCategoria.forEach(producto => {
        carritoTexto += `- ${producto.titulo}\n`;
      });
      carritoTexto += '\n';

      const divCategoria = document.createElement("div");
      divCategoria.classList.add("carrito-categoria");
      divCategoria.innerHTML = `
        <h2>${categoria}</h2>
      `;
      contenedorCarritoProductos.append(divCategoria);

      productosCategoria.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("carrito-producto");
        divProducto.innerHTML = `
          <div class="carrito-producto-titulo">
            <h3>- ${producto.titulo}</h3>
          </div>
        `;
        divCategoria.append(divProducto);
      });
    }

    const botonCopiar = document.createElement('button');
    botonCopiar.id = 'boton-copiar';
    botonCopiar.className = 'boton';
    botonCopiar.textContent = 'Copiar al portapapeles';
    botonCopiar.addEventListener('click', () => {
      navigator.clipboard.writeText(carritoTexto);
      alert('La información se ha copiado al portapapeles');
    });
    contenedorCarritoAcciones.insertBefore(botonCopiar, contenedorCarritoAcciones.firstChild);

  } else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
  }

  actualizarBotonesEliminar();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonesEliminar.forEach(boton => {
    boton.addEventListener("click", eliminarDelCarrito)
  });
}

function eliminarDelCarrito() {

}
