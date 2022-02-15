var computer = {
  price: 65000,
  stroge: "8gb",
  processor: "intel i5",
  color: 'silver'
};
// console.log(computer);
console.log(computer.color);
var computerPrice = computer.price;
console.log(computerPrice);
// set a object property value
computer.price = 25000;
console.log(computer);


// differtent ways to set a value of an object property
var priceproperty = "price";


computer.price = 36221;
computer["price"] = 15525;
computer[priceproperty] = 264;

var strogepoperty = "stroge";
computer[strogepoperty] = '522gb';


computer["stroge"] = '1tb';


computer.stroge = '6tb';
console.log(computer);