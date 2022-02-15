// var i = 0;
// while (i < 14) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
//   i++;
// }



// for (var i = 0; i < 15; i++) {
//   console.log(i);
//   if (i > 12) {
//     break;
//   }
// }


var numbers = [34, 456, 56, 4, 6, 4, 3, 2, 5, 67, 4];
// for (var i = 0; i < numbers.length; i++) {
//   var number = numbers[i];
//   console.log(number);
//   if (number > 90) {
//     break;
//   }
// }



for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 90) {
    continue;
  }
  console.log(number);
}