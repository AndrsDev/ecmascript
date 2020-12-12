//Array flat -------------------------------------------
let matrix = [1, 2, 3, [1 ,2, 3, [1, 2, 3]]];
console.log(matrix.flat(2));


//Array flatMap ------------------------------------------
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));


//Trim Start/End -------------------------------------------
let message = '      hello       ';
console.log(message.trimStart());
console.log(message.trimEnd());


//Optional catch binding ----------------------------------
try {
  
} catch {

}


//Object.fromEntries --------------------------------------
let entries = [
  ['name', 'Andres', ],
  ['age', 32],
]

console.log(Object.fromEntries(entries));


//Object prototype symbol --------------------------------
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);