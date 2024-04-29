//elementos del DOM necesarios
const container = document.getElementById('container');
const newGrid = document.querySelector('.btn.new-grid');
const pencil = document.querySelector('.btn.pencil');
const erase = document.querySelector('.btn.erase');
const restart = document.querySelector('.btn.restart');

//funcion generadora de numeros aleatorios
const random = () => Math.floor((Math.random()*255));

//seleccionar color random rgb
const  colorRandom = () =>{
    let rojo = random();
    let verde = random();
    let azul = random ();
    return `rgb(${rojo},${verde},${azul})`;
};

//restart

const reiniciar = () => {
    const divContainer = document.querySelectorAll('.square');
    if(divContainer!==null){
        for(let i = 0;i < divContainer.length;i++){
            container.removeChild(divContainer[i]);
        }
    }
};

//generador de grilla

const generarGrilla = (tamanio) =>{
    reiniciar();
    let tamDiv= 100/tamanio;
    for(let i = 0;i<tamanio*tamanio;i++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width=`${tamDiv}%`;
            square.style.height=`${tamDiv}%`;
            container.appendChild(square);
        }
    }

//events listeners

restart.addEventListener('click',() =>{
    reiniciar();
});

newGrid.addEventListener('click',() => {
    let tamanio
    do{
         tamanio = window.prompt('Plese, introduce the numbers of squares');
    }while(tamanio>50 || tamanio<10);
    generarGrilla(tamanio);

    const cuadrados = document.querySelectorAll('.square');
    
    cuadrados.forEach( (elementos) =>{
        elementos.addEventListener('mouseover', () => {
            elementos.style.backgroundColor = colorRandom();
        })
    });
});

//goma de borrar

erase.addEventListener('click',() => {
    const cuadrados = document.querySelectorAll('.square')

    cuadrados.forEach( (elementos) =>{
        elementos.addEventListener('mouseover', () => {
            elementos.style.backgroundColor = 'white';
        })
    });
});

//lapiz

pencil.addEventListener('click', () => {

    const cuadrados = document.querySelectorAll('.square')

    cuadrados.forEach( (elementos) =>{
        elementos.addEventListener('mouseover', () => {
            elementos.style.backgroundColor = colorRandom();
        })
    });

})












