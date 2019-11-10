console.log("\u{1F40B}");
// First Task
// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(data) {
  let array = data.split("-");
  console.log(array);
  let newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    let string = `${array[i + 1].charAt(0).toUpperCase()}${array[i + 1].slice(
      1
    )}`;

    newArray.push(string);
  }

  let removed = array.slice(0, 1);
  newArray.unshift(array[0]);

  console.log(newArray);
  let newData = newArray.join("");
  console.log(newData);
}
camelize("background-fox-umbrella-cat-kite-stuff");
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
