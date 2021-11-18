// Manipulando Strings e Arrays

// Separando um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = 'Eu quero viver de programação'
let myArray = phrase.split(' ') //para separar cada com espaços vazios (posso colocar qualquer letra ali também para que ela não apareça, como o "r" por exemplo)

// transformei de string para array através do método split("")
let phraseWithUnderscore = myArray.join('_') // aqui do array de volta para uma string através do metodo join("")
console.log(phraseWithUnderscore)
