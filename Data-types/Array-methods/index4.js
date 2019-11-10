// Создать расширяемый калькулятор task number 6;

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

// function Calculator(str) {
//   this.str = str;
//   this.calculate = function() {

//     if (this.str.includes("+") ) {
//       let arr = this.str.split(" + ") ;
//       arr = parseInt(arr[0]) + parseInt(arr[1]);
//       console.log(arr);
//     }
//     if (this.str.includes("-")) {
//       let arr = this.str.split(" - ");
//       arr = parseInt(arr[0]) - parseInt(arr[1]);
//       console.log(arr);
//     }
//   };
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// }
function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };
  this.calculate = function(str) {
    let arr = str.split(" ");
    let num1 = +arr[0];
    let operator = arr[1];
    let num2 = +arr[2];
    if (isNaN(num1) || isNaN(num2) || !operator) {
      console.log(`re-write your string`);
    }
    return this.methods[operator](num1, num2);
  };
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
let calc = new Calculator();
let powerCalc = new Calculator();
console.log(calc.calculate("334 - 45  "));
powerCalc.addMethod("*", (a, b) => a * b);
console.log(powerCalc.methods);
console.log(powerCalc.calculate("34 * 2"));
