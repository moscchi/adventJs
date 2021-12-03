//Esta será la carta que trabajaremos

const carta = 'bici coche balon _playstation bici coche peluche coche'

function listGifts(letter) {
//Lo primero que hago es eliminar los espacios de la carta. Luego separo las palabras por una coma y los ordeno alfabéticamente..
    let arr = letter.split(' ').join().split(',').sort();
  
//Como bien dice el enunciado algunos niños escriben mal sus cartas, por lo que en las siguientes lineas lo que hago es eliminar todas las palabras mal escritas siguiendo el enunciado.
    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes('_')){
            arr.splice(i, 1);
        }
    }
  
//Ahora bien, hay que sacar los juguetes redundantes.
    let sinRep = arr.filter((toy, i) => i == 0 ? true : arr[i-1] != toy);
  
//Ahora tenemos que saber cuales juguetes están repetidos para saber su cantidad.
    let arrSR = sinRep.map(toy => {
        const cant = arr.filter(juguete => toy === juguete).length;
        return cant});
  
//Acá los pasamos a un objeto.
    var obj = sinRep.reduce(function(acc, juguete, i, sinRep) {
        acc[sinRep[i]] = arrSR[i];
        return acc;
    }, {});
        return obj;
//¡Nuestra función ya está en condiciones de entregarla a Papa Noel!
}

console.log(listGifts(carta));
