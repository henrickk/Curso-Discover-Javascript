// for...in

let person = {
  name: 'Mateus',
  age: 20,
  weight: 80.6
}

for (let property in person) {
  console.log(property)
  console.log(person[property]) // or console.log(person.name) or console.log(person[property])
}
