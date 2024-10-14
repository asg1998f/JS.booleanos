//1. Booleanos

let booleano1= true;
let booleano2= false;

//1 
let booleanoAnd = booleano1 && booleano2;
//2
let booleanoOr = booleano1 || booleano2;
//3
let booleanoNot = !booleano1;
//4
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 ||(!booleano1 && !booleano2));


//2. Operadores

//1
const valorDivision = 17/2;
console.log(valorDivision.toFixed(2));
//2
const valorResto = 17%7;

//3. Lógica de programación

//1
let A = 9;
let B = "9";

if (A==B){
    console.log("Son iguales")
}else{
    console.log("No son iguales")
}

if (A===B){
    console.log("Son iguales")
}else{
    console.log("No son iguales")
}
//2
let mochila =["saco","patatas","pimientos","pollo","yogur"];

//a
if (mochila.length>10){
    console.log("No puedo cargar con tantas cosas")
}
//b
if (mochila.length>=2 && mochila.length<=10){
    console.log("Qué bien voy con mi mochila")
}else{
    console.log("Creo que no necesito mi mochila")
}
//3
let contarHasta10 = 0;
for(let i = 0; i<10; i++){
    contarHasta10++
    console.log('He contado hasta ' + contarHasta10)
}
console.log(contarHasta10)
//4
let diaFestivo= true;
diaFestivo=true ? console.log('Hoy no trabajo') : 
console.log('Hoy trabajo');
//5
let arrayBucle = [];
for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i);
}
console.log(arrayBucle); 
//6
let suma=0
for (let i = 0; i < arrayBucle.length; i++) {
    suma += arrayBucle[i];
}
console.log(suma)
//7
const palabras=['Con', 'Sofia', 'aprendiendo', 'bucles'];
for (let palabra of palabras){
    console.log('Muestra esta palabra '+palabra)
}
for (let x in palabras){
    console.log(palabras[x])
}
//8
let i=0;
while (i<=19){
    if(i%3===0){
        console.log("Patata")
    }
    i++
}