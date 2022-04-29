let btnMenu = document.getElementById("btnMenu");
let mainNav = document.getElementById("mainNav");

btnMenu.addEventListener('click', function(){
    mainNav.classList.toggle('mostrar');
})

class Producto {
    constructor(id, nombre, categoria, precio) {
        this.id = id;
        this.nombre = nombre; 
        this.categoria = categoria;
        this.precio = precio; 
    }
}

class Carrito {
    constructor(id, nombre, categoria, precio, cantidad) {
        this.id = id;
        this.nombre = nombre; 
        this.categoria = categoria;
        this.precio = precio; 
        this.cantidad = cantidad;
    }
}

let listaProductos = [
    {id: 1, nombre: "Remera negra", categoria: "remeras", precio: 1500},
    {id: 2, nombre: "remera blanca", categoria: "remeras", precio: 1500}
]

let carrito = []

const guardarProducto = () => {
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value; 
    let precio = parseInt(document.getElementById("precio").value); 

    let nuevoProd = new Producto (nombre, categoria, precio)
    listaProductos.push(nuevoProd);
}



function mostrarProds () {
    let cards = "";
    listaProductos.forEach(el => {
        let card = document.createElement("div");
        card.classList.add("producto");

        let img = document.createElement("img")
        card.classList.add("productoImg");
        img.setAttribute("src", `https://via.placeholder.com/100`);
        card.appendChild(img); 

        let divCard = document.createElement("div");
        divCard.classList.add("productoDescrip");
        card.appendChild(divCard);

        let h3Producto = document.createElement("h3");
        h3Producto.classList.add("productoTitulo");
        h3Producto.innerText = `${el.nombre}`;
        divCard.appendChild(h3Producto);

        let spanProducto = document.createElement("span");
        spanProducto.classList.add("productoPrecio");
        spanProducto.innerText = `$${el.precio}`;
        divCard.appendChild(spanProducto);

        let iconProducto = document.createElement("i");
        iconProducto.classList.add("productoIcon");
        iconProducto.classList.add("fa-solid fa-cart-plus");
        card.appendChild(iconProducto);

        let botonProducto = document.createElement("button");
        botonProducto.classList.add("btnComprar");
        card.appendChild(botonProducto);
        
    
        let sectionProducto = document.getElementById("containerDos");
        sectionProducto.appendChild(card); 

        

        const botonCompra = document.getElementsByClassName(`btnComprar`);
         botonCompra.addEventListener('click', () =>{
            agregarProducto(Producto); 
         });
    })
}

mostrarProds()


function agregarProducto(producto) {
    if (carrito.some(item => item.id == producto.id)) {

    } else {
        let nuevoProducto = new Carrito(producto.id, producto.nombre, producto.precio, 1);
        carrito.push(nuevoProducto); 
    }
}




