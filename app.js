function isValidCard(num){
do{
  //prompt para pedir el número como string
  var askNumb = prompt("Indique el número de su tarjeta")
}while(!askNumb)
  //split para separar los numeros (strings)
  var cardNumb = askNumb.split("")
  //arr vacio que va a contener mi Arr invertido
  var numbArr = []
  //itera en cardNumb, toma el índice [i], se pasa a número y se pone al comienzo de numbArr
  for (i = 0; i < cardNumb.length; i++){
  numbArr.unshift(parseInt(cardNumb[i]))
  }

//crear una var donde se saque la longitud de mi var y luego que se queden solo los numemros que son %2=0 para saber que son pares
//var vacía para los numeros pares
var evenNumb= []
//en var resultado se suman los numeros impares
var result= 0;
//el for itera sobre la longitud del array contenedor de numeros
for(var a=0; a<numbArr.length;a++){
  //si el residuo del indice es igual a 0, me suma los numeros impares directo al resultado
  if(a%2===0){
    result += numbArr[a]
    //los numeros que no son impares, los pone y multiplica por dos
  }else{
    evenNumb.push(numbArr[a]*2);
  }
}
//se itera por mis numeros pares
for(var e=0; e<evenNumb.length; e++){
  //si el indice de mis numeros pares es menor a 10
  if(evenNumb[e]<10){
    //sumar el indice a resultado
    result += evenNumb[e];
    //si no es menor a 10, se separa y se suma
  }else {
    //se crea una var donde mis numeros pares se sumen con string
    var temp= evenNumb[e]+ ("");
    //se crea otra var donde el string anterior se separe
    var divide= temp.split("")
    //se itera por la longitud de mi var dividida
    for(var o= 0; o<divide.length; o++){
      //el resultado se suma a mi indice y se convierte de nuevo en number
      result+= parseInt(divide[o]);
    }
  }
// retorna que si el modulo de resultado es 0 retorne "tarjeta válida" si no, "tarjeta inválida"
}  return alert(result % 10 === 0 ? "Tarjeta Válida" : "Tarjeta Inválida")
}

//numero de tarjeta válida para probar funcionalidad 4417123456789113

console.log(isValidCard())
