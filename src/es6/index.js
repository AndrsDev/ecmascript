//Jun 2015
//Default Parameters ---------------------------
function sayHello(message = 'Hello'){
  var test = 'test';
  console.log(message)
}

sayHello();
sayHello('Hola')


//Template literals ---------------------------
let hello = "Hello";
let world = "World";
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

let loerm = `
  Otra frase
  épica.
`
console.log(loerm);

//Destructuración --------------------------
const person = {
  name: 'andres',
  age: '22',
  country: 'GT'
}

const { name, age, country } = person;
console.log(name, age);


//Spread Operator -------------------------
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);


//Let y Const --------------------------------
{
  //Available in the global scope
  var global = "Global Var";
}

{
  //Only available in this block scope
  let globalLet = 'Global Let';
  const globalConst = 'Global Const';
}

//Shorthand property names --------------------
let one = '1';
let two = '2';

let obj = {
  one,
  two
}
console.log(obj)


//Arrow Functions ----------------------------------
const arrowFn = (name) => {
  console.log(`Hello ${name} from an arrow function.`)
}
arrowFn('Andres');

const square = num => num * num;
console.log(square(5));

const names = [
  { name: 'Andres', age: '22'},
  { name: 'Pablo', age: '19'},
]
names.map((item) => console.log(item.name))


//Promises -----------------------------------------
const helloPromise = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Pormise resolved!')
    }, seconds * 1000);

    setTimeout(() => {
      reject('Pormise rejected!')
    }, seconds * 1000);
  })
}

helloPromise(1)
  .then((response) => console.log(response))
  .catch((response) => console.log(response));



//Classes ------------------------------------------
class Calculator {
  constructor(name) {
    this.name = name
  }

  sum(valueA, valueB) {
    return valueA + valueB;
  }
}

const calc = new Calculator('Custom Calculator');
console.log(calc.sum(1, 2));
console.log(calc.name);


//Modules ---------------------------------------
import hello from './module.js';
hello();


//Generators ------------------------------------
function* helloWorld() {
  const parts = ['Hello', 'World'];
  for (const iterator of parts) {
    yield iterator
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
