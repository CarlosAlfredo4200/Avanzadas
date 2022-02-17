console.log('Hola');


let nombre= 'Carlos'
var c = 5

const prueba = () =>{

    nombre = 'Juan'
    console.log('VAr = '+ a);
    console.log(nombre);
    console.log(c);
    
    var a = 5;

}
prueba();


var c = 'Alfredo'

 //console.log(a);
console.log(c);

console.log();
 
//--------------------------------------------

const titulo = document.querySelector('h1');
titulo.innerHTML="Mensaje desde DOM"
document.body.appendChild(titulo)

const mensaje2 = document.getElementById('m2')
mensaje2.innerText="Mensaje por id"
document.body.appendChild(mensaje2)

const mensaje3 = document.createElement('p')
const info = document.createTextNode('Creado desde el DOM')
mensaje3.appendChild(info)
document.body.appendChild(mensaje3)

 
const estilo = document.querySelector('h1').style.backgroundColor = 'yellow'
const estilo1 = document.querySelector('h1').style.padding = '30px'
const estilo2 = document.querySelector('h1').style.width = '60%'
const margin = document.querySelector('h1').style.margin = 'auto'
const border = document.querySelector('h1').style.borderRadius = '50px'
const alinear = document.querySelector('h1').style.textAlign = 'center'

//---Export metodos

module.export = {
    area, perimetro
}
