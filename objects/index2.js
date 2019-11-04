// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] = obj[key] * 2;
      console.log(obj[key]);
    }
  }
}
multiplyNumeric(menu);
console.log(menu);
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.
