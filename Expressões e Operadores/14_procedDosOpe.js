/*
  Operator precedence
  Precedência de operadores

// De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/

console.log((2 + 5) * 10) //grouping
console.log(3 > 2 > 1)//false pois true não é maior que 1
console.log(3 > 2 && 2 > 1)//true
