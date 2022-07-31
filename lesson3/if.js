// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1
if (x !== 0) {
    console.log(true)
} else if (x===0) {
    console.log(false)
}

let x1 = 0
if (x1 !== 0) {
    console.log(true)
} else if (x1===0) {
    console.log(false)
}

let x2 = -3
if (x2 !== 0) {
    console.log(true)
} else if (x2===0) {
    console.log(false)
}




// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt("Time")
if (time <= 15) {
    console.log("перша")
} else if (15 <= time && time < 30) {
    console.log("Дрга")
} else if (30 <= time && time < 45) {
    console.log("Третя")
} else if (45 <= time && time < 59) {
    console.log("Четверта")
} else if (time > 59) {
    console.log("?")
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt("day")
if (day <= 10) {
    console.log("перша")
} else if (10 <= day && day < 20) {
    console.log("Дрга")
} else if (20 <= day && day <= 31) {
    console.log("Третя")
} else if (time > 31) {
    console.log("?")
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let days = prompt("What day");
switch (days) {
    case "1" :
        console.log("monday")
        break;
    case "2" :
        console.log("tuesday")
        break;
    case "3" :
        console.log("wednesday")
        break;
    case "4" :
        console.log("thursday")
        break;
    case "5" :
        console.log("friday")
        break;
    case "6" :
        console.log("saturday")
        break;
        case "7" :
        console.log("sunday")
        break;

}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

//
let c = prompt("number 1")
let e = prompt("number 2")
if (c>e){
    console.log(c)
}
else if (e > c) {
    console.log(e)
}
else if ( e === c) {
    console.log( e||с)
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x4 = prompt("what x") || "default"
console.log(x4)

