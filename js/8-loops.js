
/* for(inicio, fin, incremento)*/

/*let list = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

/*

for of arrays, strings [algo]

for (varible of objeto) {
  código
}

*/

/*

/*
for in ---> objetos 
propiedades = valor
for (varible in objeto) {
  código
}
*/
const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1,
};

let canasta = ["manzana", "pera", "naranja", "uva"];

for (fruta of canasta) {
  console.log(fruta);
}

for (fruta in listaDeCompras) {
  console.log(fruta);
}

for (fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

/*
while(condicion) {
  código
}
*/

/*let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador++;
}

/* 

do {
  cÃģdigo
} while (condicion)

*/

/*let con = 0;

do {
  console.log(con);
  con++;
} while (con < 10);*/