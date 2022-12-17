// ДЕЛИМ КВАДРАТИКИ ИЗ УЧЕБНИКА "DEVIDE AND CONQUER"
// function rect(x, y) {
//   if (x > y) {
//     x = x - y;
//     rect(x, y);
//   }
//   if (x < y) {
//     y = y - x;
//     rect(x, y);
//   } else if (x === y) {
//     console.log(
//       `Для данного участка максимальная разбивка на одинаковые квадраты: ${x}x${y} `
//     );
//   }
// }
// rect(50, 25);

// function arrGen(num) {
//   let arr = [];
//   for (let i = 0; i < num; i++) {
//     arr.push(i);
//   }
//   console.log(arr);
// }

// function add(arr) {
//   const length = arr.length;
//   if (length === 1) {
//     console.log(+arr);
//   } else if (length > 1) {
//     arr[length - 2] += arr[length - 1];
//     arr.pop();
//     add(arr);
//   }
// }

// arrGen(999);
// add([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// function sort(arr) {
//   if (arr.length < 2) {
//     return;
//   }
//   const base = arr[0];
//   let less = [];
//   let more = [];
//   for (i in arr) {
//     if (arr[i] > base) {
//       more.push(arr[i]);
//       sort(more);
//     }
//     if (arr[i] < base) {
//       less.push(arr[i]);
//       sort(less);
//     }
//   }
//   console.log(less, base, more);
// }
// sort([8, 7, 6, 5, 4, 3, 2, 1]);
