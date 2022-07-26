// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let animals = ["cat","dog","mouse", "tiger", "lion", "wolf","monkey","rabbit", "fox", "rat"]
console.log(animals [0])
console.log(animals [1])
console.log(animals [2])
console.log(animals [3])
console.log(animals [4])
console.log(animals [5])
console.log(animals [6])
console.log(animals [7])
console.log(animals [8])
console.log(animals [9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let Witcher = {
    title: "The Witcher",
    pagecount: 288,
    genre: "Fantasy"
};
console.log(Witcher)
let Kazan = {
    title: "Kazan",
    pagecount: 239,
    genre: "Fiction"
};
console.log(Kazan)
let Podrostok = {
    title: "Podrostok",
    pagecount: 624,
    genre: "Fiction"
}
console.log(Podrostok)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let Witcher1 = {
    title: "The Witcher",
    pagecount: 288,
    genre: "Fantasy",
    authors:[
        {name:"Andrzej Sapkowski",
            age: 74}
    ]
};
console.log(Witcher1)
let Kazan1 = {
    title: "Kazan",
    pagecount: 239,
    genre: "Fiction",
    authors:[
        {
        name: "James Oliver Kerwood",
        age: 49
    }
    ]
};
console.log(Kazan1)
let Podrostok1 = {
    title: "Podrostok",
    pagecount: 624,
    genre: "Fiction",
    authors:[  {name:"Fyodor Dostoevsky",
    age: 60} ]}
console.log(Podrostok1)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users=[
    {
        name:"Max",
        username:"max",
        password:111
},
    {
        name:"Anna",
        username:"An",
        password:123
    },
    {
        name:"Alexey",
        username:"Alex",
        password:121
    },
   {
        name:"Sasha",
        username:"Sanya",
        password:112
    },
  {
        name:"Diana",
        username:"Di",
        password:151
    },
    {
        name:"Ksenia",
        username:"Ksu",
        password:311
    },
   {
        name:"Dmitriy",
        username:"Dima",
        password:511
    },
  {
        name:"Julia",
        username:"Julie",
        password:116
    },
   {
        name:"Yana",
        username:"Yana",
        password:777
    }, {
        name:"Kristina",
        username:"Kris",
        password:222
    }
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
