// Task number 7;
// Трансформировать в массив имён

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:
let names = [];
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

// alert( names ); // Вася, Петя, Маша
for (let i = 0; i < users.length; i++) {
  names.unshift(users[i].name);
}
let names1 = users.map(item => item.name);

console.log(names1);

// *******************************************************

// task number 8;
// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [vasya1, petya1, masha1];

// let usersMapped = /* ... ваш код ... */

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

let usersMapped = users1.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: `${user.id}`
}));
// ! need to write extra () in the body of the function so the arrow function understands that it is not an object!!!!!
console.log(usersMapped[0].fullName);
console.log(usersMapped[0].id);
