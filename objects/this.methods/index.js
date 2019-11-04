// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  num1: 0,
  num2: 0,
  sumOfNumbers: 0,
  multOfNumbers: 0,
  read() {
    this.num1 = +prompt("type 1 number");
    this.num2 = +prompt("type 2 number");
  },
  sum() {
    console.log(this.sumOfNumbers);
    this.sumOfNumbers = this.num1 + this.num2;
  },
  mul() {
    this.multOfNumbers = this.num1 * this.num2;
  }
};

calculator.read();
calculator.mul();
calculator.sum();
console.log(calculator);
// alert(calculator.mul());
