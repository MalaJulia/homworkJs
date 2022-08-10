// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let text1 = "hello world"
let text2 = "lorem ipsum"
let text3 = "javascript is cool"
console.log(text1.length, text2.length, text3.length)
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(text1.toUpperCase(), text2.toUpperCase(), text3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(text1.toLowerCase(), text2.toLowerCase(),text3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
 let str = ' dirty string   '
console.log(str.substring(1, 12))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';
function stringToarray(str) {
 let  split = str1.split(' ')
return split
}
console.log(stringToarray(str))


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let num = [10,8,-7,55,987,-1011,0,1050,0]
let map = num.map((value, index) => (index+''))
console.log(map)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums (num, direction){
    if (direction === 'ascending' ){
    nums.sort((numb1, numb2) => numb1 - numb2)}

else if (direction === 'descending') {
    nums.sort((numb1, numb2) => numb2 - numb1)
}
}
sortNums(nums, 'ascending')
console.log(nums)
sortNums(nums,'descending' )
console.log(nums)
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort1 = coursesAndDurationArray.sort((a, b)=> {
return b.monthDuration-a.monthDuration })
console.log(sort1)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterMonth = coursesAndDurationArray.filter(value => value.monthDuration > 5 )
console.log(filterMonth)


// описати колоду карт
let cards = [
    {cardSuit:'spade', value:'6',  color: 'black'},
    {cardSuit:'diamond', value:'9',  color: 'red'},
    {cardSuit:'heard', value:'ace',  color: 'red'},
    {cardSuit:'clubs', value:'6',  color: 'black'},
    {cardSuit:'spade', value:'10',  color: 'black'},
    {cardSuit:'diamond', value:'king',  color: 'red'},
    {cardSuit:'spade', value:'ace',  color: 'black'},
    {cardSuit:'diamond', value:'queen',  color: 'red'},
    {cardSuit:'spade', value:'9',  color: 'black'},
    {cardSuit:'diamond', value:'9',  color: 'red'}
]
// - знайти піковий туз
let  spadeAce = cards.filter(value => value.cardSuit ==='spade'&& value.value==='ace')
console.log(spadeAce)
// - всі шістки
let  six = cards.filter(value => value.value==='6')
console.log(six)
// - всі червоні карти
let  red = cards.filter(value => value.color==='red')
console.log(red)
// - всі буби
let  diamond = cards.filter(value => value.cardSuit==='diamond')
console.log(diamond)
// - всі трефи від 9 та більше
let nine = cards.filter (value => value.cardSuit==='spade' && value.value > '8' || value.value==='10')
console.log(nine)

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

let redus = cards.reduce((accumulator, suit) => {
    if ( suit.cardSuit === 'spade') {
        accumulator.spades.push(suit);
    } else if(suit.cardSuit === "diamond") {
        accumulator.diamonds.push(suit)
    } else if (suit.cardSuit==="heart") {
        accumulator.hearts.push(suit)
    }else if (suit.cardSuit==="clubs"){
        accumulator.clubs.push(suit)
    }return accumulator;
}, {spades: [], hearts: [], diamonds:[], clubs:[]}
)
console.log(redus)