// Funcion para el desafío clase 6
function usuario(nombre, apellido){
    var nombre = [prompt('Ingrese su nombre: ')];
    var apellido = [prompt('Ingrese su apellido: ')];
    var login = nombre.concat(apellido); //para el desafío de la clase 6
    console.log(login);
    console.log(login.join("-"));
    alert("Bienvenido "+login.join(' ')+". \nEsperamos que la pases bien aquí.")
    localStorage.setItem(nombre, apellido)  //usar local storage clase 7
}
// Carta de productos:
// <div class="row">
//     <div class="col s12 m6">
//       <div class="card">
//         <div class="card-image">
//           <img src="images/sample-1.jpg">
//           <span class="card-title">Card Title</span>
//           <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
//         </div>
//         <div class="card-content">
//           <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
//         </div>
//       </div>
//     </div>
//   </div>



// Archivo Json con los objetos
var dbJSON =`[
    {"artista":"Avenged Sevenfold", "valor":"1000", "imagen":"Imagenes/A7x-CoE.jpg"},
    {"artista":"Muse", "valor":"600", "imagen":"Imagenes/Muse-BHR.jpg"},
    {"artista":"Avril Lavigne", "valor":"700", "imagen":"Imagenes/AL-BDT.jpg"}
]`

// Objeto 
class Producto {
    constructor(artista,valor,imagen) {
        this.artista = artista
        this.valor = valor;
        this.imagen = imagen;
        this.id = Math.random() * 1000; //para aplicarle un valor de id al azar para identificarlo en el html
    }

}
 var productos

// pasar el Json a objeto de JS
window.onload = () => {
    let objetoDeJSON = JSON.parse(dbJSON);
    productos = objetoDeJSON.map ( objeto => {  //El map lo que hace es correr una funcion
        return new Producto(objeto.artista, objeto.valor, objeto.imagen);
    });
    console.log(productos)


    const productsContainer = document.getElementById('productosLista');  //desafio clase 8

    productos.forEach( objeto => {
        productsContainer.innerHTML +=  createCard(objeto);
    });
}
//desafio clase 9 con eventos del onclick y uso del DOM .... Creación de cartas de producto
function createCard(objeto) {
    // return `<div id="productosLista">
    //     <img class="imagenProducto" src="${objeto.imagen}" width="350" height="350">
    //     <div class="titulodelproducto">${objeto.artista}</div>
    //     <div class="preciodelproducto">${objeto.valor}</div>
    // </div>`
    return `<div class="row">
    <div class="col s12 m6">
      <div class="card" id="${objeto.id}">
        <div class="card-image">
          <img src="${objeto.imagen}">
          <button ><a class="btn-floating halfway-fab waves-effect waves-light red" class="addToCart" onclick="addToCart(event)"><i class="material-icons">add</i></a></button>
        </div> 
        <span class="card-title" >${objeto.artista}</span>
        <div class="card-content">
          <p>Precio: $${objeto.valor}</p>
        </div>
      </div>
    </div>
  </div>`
}


function addToCart(event) {
    let counter = document.getElementById("cartCounter"); //clase 8
    let currentValue = counter.innerHTML;
    counter.innerHTML = parseInt(currentValue) + 1;
  
    let container = event.target.parentNode.parentNode.parentNode.parentNode;
    // console.log(container.id);
  
    let product = productos.find((producto) => {
        return producto.id == container.id;
    }); 
    
    alert(product.artista);
}
    