//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sRectilinear = (a,b) => a * b;
console.log(sRectilinear(15,10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sCircle = (r) => Math.PI * Math.pow(r,2)
console.log(sCircle (10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sCylinder = (r,h) => 2 * Math.PI * (r + h)
console.log(sCylinder(2, 10))

// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
function array (users) {
    for (const user of users) {
        console.log(user) }
}
array(users)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text (h) {
    document.write(`<h3>${h}</h3>`)
}

console.log(text ('okten'))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function textLi (h) {
   document.write(`<ul>`)
    for (let i = 0; i <3; i++) {
        document.write(`<li>${h}</li>`)
    }
    document.write(`</ul>`)

}
console.log(textLi('hello'))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function textUl (h,n) {
    document.write(`<ul>`)
    for (let i = 0; i < n; i++) {
        document.write(`<li>${h}</li>`)
    }
    document.write(`</ul>`)

}
console.log(textUl('OKTEN', 5))

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let ar  = [ 11, "text", true]
function textArray (array) {
document.write(`<ul>`)
    for (let i = 0; i < array.length; i++)
        {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}

textArray(ar)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let ar2 = [
    {id:1, name:"anna", age: 20 },
    {id:2, name:"Dima", age: 10 },
    {id:3, name:"Julia", age: 40 },
    {id:4, name: "Sasha", age: 30 }
]

function docArray(arr){
    for (let i = 0; i < arr.length; i++)
    document.write(`<div>${arr[i].id} ${arr[i].name} ${arr[i].age}</div>`)
}
docArray(ar2)


// - створити функцію яка повертає найменьше число з масиву
let num = [303,2,1,5];
function minNum (array){
    let min = array[0]
    for (const item of array) {
        if (min > item) {
            min = item
        }
    }
    return min
}

console.log(minNum(num))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let num1 = [303,5,9,1];

function sumaNum (array2) {
    let suma = array2[0]
    for (let i = 1; i < array2.length; i++) {
        suma += array2[i]
    }
    return suma
}

console.log(sumaNum(num1))