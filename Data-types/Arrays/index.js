console.log("\u{1F60D}");
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
let array = [];
function sumInput() {
  let input;

  while (true) {
    input = prompt("Add number", "");
    if (input == "" || input == null || !isFinite(input)) {
      break;
    }

    array.push(parseInt(input));

    console.log(array);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
      console.log(sum);
    }
  }
}

sumInput();
// console.log(array);
