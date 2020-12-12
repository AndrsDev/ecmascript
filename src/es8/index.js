//Jun 2017
//Object entries ----------------------------------
const data1 = {
  frontend: 'Andres',
  backend: 'Isabel',
  designer: 'Ana'
}

const entries = Object.entries(data1);
console.log(entries)
for (const [ key, value ] of entries) {
  console.log(key, value)
}

//Object Values --------------------------------------
const data2 = {
  frontend: 'Andres',
  backend: 'Isabel',
  designer: 'Ana'
}

const values = Object.values(data2);
console.log(values);


//Object Keys --------------------------------------
const data3 = {
  frontend: 'Andres',
  backend: 'Isabel',
  designer: 'Ana'
}

const keys = Object.keys(data3);
console.log(keys);


//String padding -----------------------------------------
const text = 'hello';
console.log(text.padStart(12, '-'));
console.log(text.padEnd(12, '-'));


// Trailing Commas --------------------------------------
const data3 = {
  frontend: 'Andres',
  backend: 'Isabel',
  designer: 'Ana', // <-- This last one is the trailing comma
}

//Async/Await ----------------------------------------------
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
}

const helloAsync = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (e){
    console.error(e);
  }
}

helloAsync();
