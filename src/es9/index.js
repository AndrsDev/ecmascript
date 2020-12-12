//Spread operator -------------------------------------
const obj = {
  name: 'andres',
  age: 22,
  country: 'GT',
}

let { name, ...all } = obj;
console.log(name, all)


//Propagation properties ------------------------------------
const obj2 = {
  name: 'andres',
  age: 22,
}

const obj3 = {
  ...obj2,
  country: 'GT',
}

console.log(obj3);


//Promise finally ---------------------------------------
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World!'), 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then(result => console.log('result -> ', result))
  .catch(err => console.log('err -> ', err))
  .finally(() => console.log('finalizó'));


//Regex --------------------------------------------------
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const date = '2018-04-28';
const match = date.match(regexData);

const year = match[1];
const month = match[2];
const day = match[3];

console.log('Match -> ', match);
console.log('Date -> ', year, month, day);
