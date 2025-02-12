//  function User(name,age,job){ //Функция конструктор(Первый способ)
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.who = function() {
//         document.write('Я ' + '<b>' + this.name + '</b>' + ' мне ' + '<b>' + this.age + '</b>' + ' лет. Я работаю ' +  '<b>' + this.job + '</b>' + '<br>');
//     }
// }

// let Dmitry =new User('Дмитрий', 26, 'Дизайнером');
// Dmitry.who();
// let Stanislav = new User('Станислав', 29, 'Программистом');
// Stanislav.who();
// let Sergey = new User('Сергей', 35, 'Менеджером');
// Sergey.who();




class My{ //Создание обьекта (Второй способ)
    constructor(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    who(){
        document.write('Я ' + '<b>' + this.name + '</b>' + ' мне ' + '<b>' + this.age + '</b>' + ' лет. Я работаю ' +  '<b>' + this.job + '</b>' + '<br>');
    }
}

let Dmitry =new My('Дмитрий', 26, 'Дизайнером');
Dmitry.who();
let Stanislav = new My('Станислав', 29, 'Программистом');
Stanislav.who();
let Sergey = new My('Сергей', 35, 'Менеджером');
Sergey.who();