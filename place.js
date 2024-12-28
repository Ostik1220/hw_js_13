//1

const user = {
  name: "tyler",
  hobby: "Golf",
  premium: true,
};

let { name, hobby, premium, mood = "happy" } = user;
hobby = "skydiving";
premium = false;
const newUser = {
  name,
  hobby,
  premium,
  mood,
};
console.log(Object.keys(newUser));

//2
const commands = {
  firstTask(x, u) {
    return x + u;
  },
  secondTask(x, u) {
    return x - u;
  },
  thirdTask(x, u) {
    return x * u;
  },
  fourthTask(x, u) {
    return x / u;
  },
};

const { firstTask, secondTask, thirdTask, fourthTask } = commands;
const arr = [firstTask, secondTask, thirdTask, fourthTask];
function countProps(array) {
  return array.length;
}

console.log(countProps(arr));

//3
const employees = [
  { name: "Andrii", tasks: 34, salary: 15100, mood: "sad" },
  { name: "Marta", tasks: 26, salary: 14300, mood: "angry" },
  { name: "Jan", tasks: 35, salary: 14500, mood: "tired" },
  { name: "Oleg", tasks: 12, salary: 8700, mood: "happy" },
];
let [director, secretary, specialist, student] = employees;
// console.log(director)
// function findBestEmployee(arr, tasks) {
let max = 0;
let bestEmployee = "";
//     for (let employee of arr) {
if (director.tasks > max) {
  max = director.tasks;
  bestEmployee = director.name;
}
if (secretary.tasks > max) {
    max = secretary.tasks;
    bestEmployee = secretary.name;
  }
  if (specialist.tasks > max) {
    max = specialist.tasks;
    bestEmployee = specialist.name;
  }
  if (student.tasks > max) {
    max = student.tasks;
    bestEmployee = student.name;
  }
console.log(`Найбільше завдань виконав ${bestEmployee} з рахунком в ${max} задач`);

//4

const middleSalary = (director.salary + secretary.salary + specialist.salary + student.salary) / employees.length
console.log(middleSalary)

//5
function getAllPropValues(prop) {
    let array = [];
if(prop in director){
    array.push(director[prop], secretary[prop], specialist[prop], student[prop] )
}
return array
}

console.log(getAllPropValues('mood'))
console.log(getAllPropValues('tasks'))
console.log(getAllPropValues('family'))

//6
const basket = [
    { name: "apple", costPer1: 5 },
    { name: "pork", costPer1: 25 },
    { name: "pinapple", costPer1: 100 },
    { name: "big red fish from ocean", costPer1: 150 }
];

let [fruit, meat, exoFruit, fish] = basket;

function calculateTotalPrice(productName, amount) {
    let price = 0;
    if (productName === fruit.name) {
        price = fruit.costPer1 * amount;
    } else if (productName === meat.name) {
        price = meat.costPer1 * amount;
    } else if (productName === exoFruit.name) {
        price = exoFruit.costPer1 * amount;
    } else if (productName === fish.name) {
        price = fish.costPer1 * amount;
    }
    return price;
}

console.log(calculateTotalPrice("apple", 7548)); 


//7

const account = {
    password: "JKLMNOP4567",
    ballance: 54700,
    history : {
        deposit: 7,
        withdraw: 8
    }
}

let {password, ballance, history:{deposit, withdraw}} = account
let verefication = prompt("Введіть свій пароль |JKLMNOP4567|")
if (verefication !== password) {
    alert("Пароль не правильний")
} else {
    while (true) {
 if (confirm(`Добрий день, на вашому рахунку ${ballance}, поповнено рахунок ${deposit} а знято з рахунку ${withdraw} раз. натисніть|ОК| щоб поповнити рахунок і |СКАСУВАТИ| щоб зняти гроші`)){
    const num = Number(prompt("Скільки хочете поповнити"))
    ballance = ballance + num
    deposit += 1
 } else {
    const num = prompt("Скільки хочете зняти")
    ballance = ballance - num
    withdraw += 1
 }
}
}

