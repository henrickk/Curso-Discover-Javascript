// if...else

/*
let temperature = 35

if (temperature >= 37.5) {
  console.log('febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
  console.log('febre moderada')
} else {
  console.log('Saudável')
}
*/

//OR

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
  console.log('febre alta')
} else if (mediumTemperature) {
  console.log('febre moderada')
} else {
  console.log('Saudável')
}
