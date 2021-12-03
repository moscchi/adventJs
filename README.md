# Desafios adventJs

_Repo con los desafios de adventJs_

## Comenzando 🚀

```
Voy a crear una branch para cada ejercicio con su correspondiente day.
```

### Day 2

_Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)_

_Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar._

_Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:_

```
const carta = 'bici coche balón _playstation bici coche peluche'
```
_Al ejecutar el método debería devolver lo siguiente:_

```
const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
```

_Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!_

_Estuvo divertidisimo 🤓_
