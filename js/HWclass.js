// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
function descriptionTeg (name,desc,Ar=[]) {
    this.titleOfTag = name;
    this.action = desc;
this.Ar = Ar;

}
    

let a = new descriptionTeg ("area", "Каждый элемент <area> определяет активные области изображения, которые являются ссылками...", [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'}
])
console.log(a);
// Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
let div = new descriptionTeg ("div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.", )
console.log(div);

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//  додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
//  і доавляет його в поточний об'єкт car
function car(model, manufacturer, years, speed, volume) {
    this.model=model;
    this.manufacturer=manufacturer;
    this.years=years;
    this.speed=speed;
    this.volume=volume;

    this.drive=function() {
        console.log("едем со скоростью",speed);    
    }   
    this.info=function () {
        console.log(model+manufacturer+years+speed+volume);   
    }
    
        
        
    
}

let vw = new car ("polo", "volswagen", 2010, 200, 2 )
console.log(vw);


vw.drive()
vw.info()

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Cinderella {
    constructor (name, age, sizeFoot ){
        this.name=name
        this.age=age
        this.sizeFoot=sizeFoot
    }
}
class Prince {
    constructor (name, age, sizeShoese){
        this.name=name
        this.age=age
        this.sizeShoese=sizeShoese
    }
}

let Cind1 = new Cinderella ("Ira", 28, 36)
let Cind2 = new Cinderella ("Gala", 40, 38)
let Cind3 = new Cinderella ("Anna", 38, 37)
let Cind4 = new Cinderella ("Stasya", 20, 39)
let mas = [Cind1, Cind2, Cind3, Cind4]
console.log(mas);

let Pri1 = new Prince ("Charli", 36, 39)

for (let i=0; mas.length; i++){
    if (mas[i].sizeFoot === Pri1.sizeShoese) {
        console.log(mas[i]);
        
    }
}