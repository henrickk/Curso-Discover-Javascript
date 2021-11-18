// Throw

function sayMyName(name = '') {
  if (name === '') {
    throw new Error('Nome é obrigatório')
  }

  console.log(name)
}

// Try...catch

try {
  sayMyName('Henrick')
} catch (e) {
  console.log(e)
}

console.log('após o try/catch')
