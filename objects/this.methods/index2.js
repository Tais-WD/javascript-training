// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

function Accumulator(startingValue) {
  (this.startingValue = startingValue),
    (this.value = 0),
    (this.read = function() {
      let num = +prompt("write a number", "0");
      return (this.value = this.value + this.startingValue + num);
    });
}
let accumulator = new Accumulator(2);
accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator);
