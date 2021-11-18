// callback function

function sayMyName(name) {
  console.log('antes de executar a função callback')
  
  name()

  console.log('depois de executar a callback')
}

sayMyName(() => {
  console.log('estou em uma callback')
})

/*
const digaMeuNome = function () {
  console.log('Henrick')
}
digaMeuNome()

const digaMeuNome = () => {
  console.log('Henrick')
}
digaMeuNome()
*/