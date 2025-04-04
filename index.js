//1
console.log("hola")
//2
const array = [1, 2, 3, 4, 5];

function mostrarArray(array)
{
    array.forEach((valor) => {console.log(valor);});
}

const mostrarArray2 = (array) => {
    array.forEach((valor) => console.log(valor));
  };
  
  mostrarArray2(array);
  mostrarArray(array);



//3
const AgregarValor = (array) => {
    array.push(6);
    array.forEach((valor) => {console.log(valor);})
  }; 
  AgregarValor(array); 


  //4

  const UltimaPosicion = (array) =>{
    let ultima
    array.forEach((valor) =>
    ultima= array.lastIndexOf(valor))

    console.log(ultima);

    
  };
  UltimaPosicion(array)
   

  //5


const SumarArray = (array) => {

  const suma = array.reduce((acumulador, valor) => acumulador + valor, 0);
  console.log(suma);
};

SumarArray(array);

//6

  const invertirArray = (array) => {
   
    let Reves = [...array].reverse();
    console.log(Reves);
  };
  
  invertirArray(array);

  //7
  
  const ordenarNumeros = (array) => {
  
    let Orden = [array].sort((a, b) => a - b);
    console.log(Orden);
  };
  
  ordenarNumeros(array);


//8

const filtrarMayores = (array, valor) => {
  let Mayores = array.filter((numero) => numero > valor);
  console.log(Mayores);
};

const valor = 3;
filtrarMayores(array, valor);

//9

const contarElemento = (array, elemento) => {
  const cantidad = array.filter(valor => valor === elemento).length;

console.log("El elemento" + elementoBuscado + " aparece " + cantidad + " veces en el array.");
};

const elementoBuscado = 1; // 
contarElemento(array, elementoBuscado);


