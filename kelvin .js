const kelvin = 293; // a variable named kelvin we equal to it 293.

const celsius = kelvin - 273; 
// a new variable named celsius we equal to it the old variable kelvin and we subtracting 273 from it.

let fahrenheit = celsius *(9/5) + 32;
// we made variable named fahrenheit and equal celsius to it and uesd the equation above to get the fahrenheit value.

fahrenheit = Math.floor(fahrenheit); // we set new value to the variable fahrenheit so we can round down the fahrenheit temperatur to the nearest whole number.
//console.log(Math.floor(fahrenheit));    is that right ????

let newton = celsius *(33/100);
//same shit 

newton = Math.floor(newton);//round down


console.log(`The temperature is ${kelvin} kelvin.`);
console.log("");
console.log(`The temperature is ${celsius} celsius.`);
console.log("");
console.log(`The temperature is ${fahrenheit} fahrenheit.`);
console.log("");
console.log(`The temperature is ${newton} newton.`);