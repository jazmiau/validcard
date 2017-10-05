#### _Web diseñada para verificar por medio de simples pasos si una tarjeta de crédito es válida o inválida_

_Los pasos a seguir son:_

+ _Por medio de un mensaje al usuario pedir que ingrese su número de tarjeta._

+ _Hacer que el dato ingresado se divida en todas sus partes._

+ _Convertir el dato a números y ponerlo en orden invertido._

+ _Luego encontrar los números de las posiciones impares._

+ _Los números de las posiciones pares se multiplican por 2, y si su resultado es mayor a 10, ambos dígitos se suman._

+ _Cuando ya tenemos todos los resultado de las casillas de numeros pares, se pasan a sumar con los numeros impares (osea, a los impares no hay que hacerles nadita)_

+ _Y luego con el resultado, se le aplica el algoritmo de luhn, si el residuo de resultado % 10 = 0, es una tarjeta válida, de ser diferente, entrega un mensaje indicando que la tarjeta es inválida. _
