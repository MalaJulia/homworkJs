// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let texts = ["text","text","text","text","text","text","text","text","text","text"]
for (let text of texts){
    document.write(
        `<div>"okten"</div>`
    )
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let texts2 = ["text","text1","text2","text3","text4","text5","text6","text7","text8","text9"]
for (let t = 0; t<texts2.length; t++ ) {
    document.write(`<div>${t} ${texts2[t]}</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let texts3 = ["text","text1","text2","text3","text4","text5","text6","text7","text8","text9","okten",
    "okten1","okten2","okten3","okten4","okten5","okten6","okten7","okten8","okten9",]
let t1 = 0
while (t1 < texts3.length) {
    document.write(`<div>${texts3[t1]}</div>`)
    t1++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let t2 = 0
while (t2 < texts3.length) {
    document.write(`<div>${t2} ${texts3[t2]}</div>`)
    t2++
}

//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let list = 0; list<listOfItems.length; list++ ) {
    document.write(`<div><ul><li>${listOfItems[list]}</li></ul></div></div>`)


}


// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    document.write(`<div class="product-card">
<h3 class="product-title">${product.title} ${product.price}</h3>
 <img src="${product.image}" alt="" class="product-image"></div>`)

}
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//
//
//
//     є масив
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
// за допомоги циклу вивести:
//     - користувачів зі статусом true
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.status) {
        console.log(user)
    }
}

// - користувачів зі статусом false
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (!user.status) {
        console.log(user)
    }
}
// - користувачів які старші за 30 років
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age>30) {
        console.log(user)
    }
}