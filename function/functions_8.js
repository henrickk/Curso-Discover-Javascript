/*
  function() construtor

  * expressão new
  * croar um novo objeto
  * this kayword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' Está andando'
  }
}

const henrick = new Person('Henrick')
const joao = new Person('João')
console.log(henrick.walk())
console.log(joao.walk())
