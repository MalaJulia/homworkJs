// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname, email, phone ) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [
    u1 = new User(1, "Vasya", "Petrov", "v@mail.com", "034958485" ),
    u2 = new User(2, "Petya", "Vas", "p@mail.com", "634756873"),
    u3 = new User(3, "Sasha", "Popov", "s@mail.com", "7438935234" ),
    u4 = new User(4, "Vanya", "Pupkin", "va@mail.com", "578686848"),
    u5 = new User(5, "Anna", "Dark", "a@mail.com", "034958485" ),
    u6 = new User(6, "Katya", "Ivanova", "k@mail.com", "634756873"),
    u7 = new User(7, "Ira", "Zayceva", "iz@mail.com", "034958485" ),
    u8 = new User(8, "Max", "Maximov", "mm@mail.com", "634756873"),
    u9 = new User(9, "alex", "Alexeev", "aa@mail.com", "034958485" ),
    u10 = new User(10, "Lera", "Tihonova", "lt@mail.com", "634756873"),
]
console.log(users)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersFilter = users.filter(value => value.id % 2 ===0 )
console.log(usersFilter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort = users.sort((a, b)=> b.id - a.id)
console.log(usersSort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order ) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [ us1 = new Client (1, "Vasya", "Petrov", "v@mail.com", "034958485", ["milk"] ),
    us2 = new Client(2, "Petya", "Vas", "p@mail.com", "634756873", ["milk","bread","butter"]),
    us3 = new Client(3, "Sasha", "Popov", "s@mail.com", "7438935234", ["milk","meat", "bread", "ice-cream", "honey"] ),
    us4 =new Client(4, "Vanya", "Pupkin", "va@mail.com", "578686848", ["butter", "milk"]),
    us5 = new Client(5, "Anna", "Dark", "a@mail.com", "034958485", ["milk","bread","butter"]),
     us6 = new Client(6, "Katya", "Ivanova", "k@mail.com", "634756873", ["milk","meat", "bread", "ice-cream", "honey","milk","meat", "bread", "ice-cream", "honey"]),
     us7 = new Client(7, "Ira", "Zayceva", "iz@mail.com", "034958485", ["butter", "milk","butter", "milk"] ),
 us8 = new Client(8, "Max", "Maximov", "mm@mail.com", "634756873", ["milk","bread"] ),
    us9 = new Client(9, "alex", "Alexeev", "aa@mail.com", "034958485", ["milk","bread","milk","bread","milk"]),
    us10 = new Client(10, "Lera", "Tihonova", "lt@mail.com", "634756873", ["ice-cream", "honey"])
    ]
console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientSort = clients.sort((a, b)=> b.order.length - a.order.length)
console.log(clientSort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 function Cars (model, producer, year, speed, volume) {
     this.model = model;
     this.producer = producer;
     this.year = year;
     this.speed = speed;
     this.volume = volume;
     // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
     this.drive = function () {
         console.log(`їдемо зі швидкістю ${this.speed} на годину`)
     }
     // // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
     this.info = function () {
         console.log(`model - ${car1.model}, producer - ${car1.producer}, year - ${car1.year}, speed - ${car1.speed}, volume - ${car1.volume}`)
     }
 }

 let car1 = new Cars ("Bens","Mersedes", "1999", 160, "4")


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
function increaseMaxSpeed (newSpeed){
    return car1.speed + newSpeed
}
console.log(car1.drive())
console.log(increaseMaxSpeed(50))
console.log(car1.info())

// -- changeYear (newValue) - змінює рік випуску на значення newValue
function changeYear(newValue) {
    car1.year = newValue
}
changeYear(2000)
console.log(car1)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
let driver = {
    name: "petya"
}
function addDriver (driver) {
    car1.driver = driver
}
addDriver(driver)
console.log(car1)

// - (Те саме, тільки через клас)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Cars2 {
    constructor(model, producer, year, speed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
        // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.speed} на годину`)
            this.info = function () {
                console.log(`model - ${car1.model}, producer - ${car1.producer}, year - ${car1.year}, speed - ${car1.speed}, volume - ${car1.volume}`)
            }
    }

}
}
let car2 = new Cars2 ("Bens","Mersedes", "1999", 160, "4")


console.log(car2)
console.log(car2.drive())
console.log(car2.info())

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
function increaseMaxSpeed2 (newSpeed){
    return car1.speed + newSpeed
}

console.log(increaseMaxSpeed2(70))

// -- changeYear (newValue) - змінює рік випуску на значення newValue
function changeYear2(newValue) {
    car2.year = newValue
}
changeYear2(2010)
console.log(car2)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
let driver1 = {
    name: "vasya"}

function addDriver2 (driver) {
    car2.driver = driver1
}
addDriver2(driver)
console.log(car2)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Popelushka ( name, age, size) {
    this.name = name
    this.age = age
    this.size = size
}
let pop = [
    pop1 = new Popelushka("anya", 25, 36),
    pop2 = new Popelushka("sasha", 18, 38),
    pop3 = new Popelushka("masha", 23, 35),
    pop4 = new Popelushka("tanya", 30, 40),
    pop5 = new Popelushka("vika", 27, 36),
    pop6 = new Popelushka("zina", 16, 39),
    pop7 = new Popelushka("lola", 19, 19),
    pop8 = new Popelushka("nina", 25, 36),
    pop9 = new Popelushka("dasha", 20, 37),
    pop10 = new Popelushka("sonya", 26, 40)

]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, size) {
        this.name = name
        this.age = age
        this.size = size
    }
}
let prince= new Prince("john", 25, 38)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function PopelushkaWithPrince() {
    for (let i = 0; i < pop.length; i++) {
        const princeElement = pop[i];
        if (pop[i].size=== prince.size) {
           return pop[i].name
        }
    }

}

console.log(PopelushkaWithPrince(pop));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const popFndPrince = pop.find((element) => {
    return element.size === prince.size;
});
console.log(popFndPrince.name)