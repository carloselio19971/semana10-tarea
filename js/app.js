//Muestra todo el documento
console.log(document);
//Muestra los nodos dentro de head
console.log(document.head);
//Muestra los nodos dentro de body
console.log(document.body);
//Muestra el dominio
console.log(document.domain);

//Ejemplo GetElementoById
const titulo=document.getElementById('titulo-ejemplo');
//Ejemplo ElementsByClassName
const parrafo=document.getElementsByClassName('parrafo-ejemplo');

console.log(titulo);
console.log(parrafo);

//Ejemplo de Query Selector
const tituloqueryselector=document.querySelector(".titulo-ejemplo-query-selector");
console.log(tituloqueryselector);
//Ejemplo Query Selector All
const ejemploul=document.querySelectorAll(".ejemplo-ul li a");
console.log(ejemploul);


//Ejemplo TextContent
const ejemplotextcontent=document.querySelector(".pTextContent");
ejemplotextcontent.textContent="Soy un parrafo modificado con javascript con la propiedad text-content";


//Ejemplo style
const ejemplostyle=Array.from(document.querySelectorAll(".ejemplo-style p"));
console.log(ejemplostyle);

ejemplostyle.forEach(parrafo=>{
    parrafo.style.color="red";
})

//Ejemplo claslist
const botonEjemplo=document.querySelector(".boton-ejemplo");
console.log(botonEjemplo);
botonEjemplo.classList.add("btn","btn-primary");


//Ejemplo con parent elemenent

const enlaceparentelement=document.querySelector('.navbar-1 li a');
//Quiero llegar al navbar para cambiar de fondo
enlaceparentelement.parentElement.parentElement.style.backgroundColor="red";

//Ejemplo de Children y  NextSibling
const ejemploNextSibling=document.querySelector(".ejemplo-NextSibling");
console.log(ejemploNextSibling.children[0].children[0].children[0].nextElementSibling.style.color="red");
//Crear elementos con javascript
//Crea un contenedor para el boton
const divElement=document.createElement('div');
const boton=document.createElement('button');
const ejemploElemento=document.querySelector(".ejemplo-create-element");
//se añade las clases de estilo para el boton
boton.classList.add('btn',"btn-primary");
//Se añade texot al boton
boton.textContent="Fui creado por JS";
//Se añade el boton
divElement.append(boton);
//Se busca el elemento del html donde se quiere inserta
ejemploElemento.appendChild(divElement);
console.log(divElement);

//Ejemplo de inner html (Creando un boton)
const divElemento=document.createElement('div');
const divEjemplo=document.querySelector(".ejemplo-inner-html");
divEjemplo.innerHTML='<button class="btn btn-primary">Soy un boton</button>';
divEjemplo.appendChild(divEjemplo);