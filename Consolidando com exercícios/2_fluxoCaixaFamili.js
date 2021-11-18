/* ### Sistemas de gasto familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
  receitas: [1845, 1500, 1100],

  despesas: {
    luz: [780.89],
    água: [173.45],
    internet: [200],
    comprasMensais: [2000]
  }
}

function soma(calc) {
  let total = 0

  for (let value of calc) {
    total += value
  }

  return total
}

function calcBalance() {
  const calcReceitas = soma(family.receitas)
  const calcDespesas = soma(family.despesas)

  const total = calcReceitas - calcDespesas

  const certo = total >= 0

  let balanceText = 'Negativo'

  if (certo) {
    balanceText = 'Positivo'
  }

  console.log(`Seu saldo está ${balanceText}: ${total}`)
}

calcBalance()
/*
let family = {
  receitas: [2500, 3200, 250.43, 360.45],
  despesas: [320.34, 128.45, 175.87, 1450.0]
}

//função para somar
function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}


function calculateBalance() {
  const calculateReceitas = sum(family.receitas)
  const calculateDespesas = sum(family.despesas)

  const total = calculateReceitas - calculateDespesas

  const itsOk = total >= 0

  let balanceText = 'Negativo'

  if (itsOk) {
    balanceText = 'Positivo'
  }

console.log(`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()
*/
