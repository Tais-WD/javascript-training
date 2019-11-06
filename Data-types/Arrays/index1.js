// Подмассив наибольшей суммы

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

//  getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

function getMaxSubSum(array) {
  let sum = 0;
  let sumarray = [];
  for (let i = 0; i < array.length; i++) {
    let newSum = 0;
    for (let j = i; j < array.length; j++) {
      newSum = newSum + array[j];

      console.log("\u{1F40B}");
      console.log(`\u{1F984} ${array[j]}`);
      console.log(`total ${newSum}`);
    }
    console.log(` **sum  ${newSum}`);
    sumarray.unshift(newSum);
  }
  //   console.log(sumarray);
  //   console.log(`the SSum ${Math.max(...sumarray)}`);
}

// getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([2, -1, 2, 3, -9]);
// getMaxSubSum([-1, 2, 3, -9, 11]);
// getMaxSubSum([-2, -1, 1, 2]);
// getMaxSubSum([100, -9, 2, -3, 5]);
// getMaxSubSum([1, 2, 3]);
