// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:
function Calculator() {
  this.read = function() {
    this.num1 = +prompt("Write a 1 number", "0");
    this.num2 = +prompt("write a 2 number", "0");
  };
  this.sum = function() {
    return this.num1 + this.num2;
  };
  this.mul = function() {
    return this.num1 * this.num2;
  };
}
let calculator = new Calculator();
calculator.read();
alert(calculator.sum());
calculator.mul();
calculator.sum();
console.log(calculator);
console.log("this is a sum" + " " + calculator.sum());
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());
