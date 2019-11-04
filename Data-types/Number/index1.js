// 5.3 Strings
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";
function ucFirst(word) {
  console.log(word[0].toUpperCase() + word.slice(1));
}
ucFirst("cat");
ucFirst("erusrhhaiel");
console.log("\u{1F60D}");

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:
function checkSpam(str) {
  let newStr = str.toLowerCase();
  if (newStr.includes("viagra") || newStr.includes("xxx")) {
    console.log("it is spam");
  } else {
    console.log("it is clean");
  }
}
checkSpam("buy ViAgRA now");
checkSpam("free xxxxx");
checkSpam("innocent rabbit");

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let newStr = str.slice(0, maxlength - 1) + "...";
    console.log(newStr);
    console.log("string cut");
  } else {
    console.log(str);
    console.log("string full");
  }
}
// with retnary operator
// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }
truncate("Вот, что мне хотелось бы сgosg;sказать на эту тему:", 10);
truncate("Вот, что мне  ", 20);

truncate("Вот, что мне хотелось бы сgosg;sказать на эту тему:", 2);

truncate("Вот, что мне хотелось бы сgosg;sказать на эту тему:", 1);

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(value) {
  let money = +value.slice(1);
  console.log(money);
}
extractCurrencyValue("%100");
