console.log("\u{1F60D}");
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
let array = [];
function sumInput() {
  let input;

  do {
    input = +prompt("Add number", "");

    array.push(input);

    console.log(input);
    console.log(array);
  } while (typeof input.isNaN == false || input != null);
}

sumInput();
// console.log(array);
