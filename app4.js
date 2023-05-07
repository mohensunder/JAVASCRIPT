// for (i = 0; i < 2; i++) {
//     console.log("Hello");
// }

// if(i == 0 && i == 1) {
//     console.log("Hello");
//   } else {
//     console.log("Goodbye");
//   }

// var i = 0;
// while(i < 3) {
//   console.log("Hello");
//   i++;
// }


// for (i = 0; i < 2; i++) {
//     for (var j = 0; j < 3; j++) {
//         console.log("Hello");
//     }
// }


// if(i <= 5) {
//     console.log("Hello");
//   } else if(i <= 10) {
//     console.log("Goodnight");
//   } else {
//     console.log("Goodbye");
//   }

// if(i == 2 || i == 3) {
//     console.log("Hello");
//   } else {
//     console.log("Goodbye");
//   }

// var result = "Hello".indexOf('l');

// var result = null;
// console.log(result);

// var x;

// if(x === null) {
//   console.log("null");
// } else if(x === undefined) {
//   console.log("undefined");
// } else {
//   console.log("ok");
// }

// function meal(animal) {
//     animal.food = animal.food + 10;
// }

// var dog = {
//     food: 10
// };
// meal(dog);
// meal(dog);

// console.log(dog.food);


// function two() {
//     return 2;
// }

// function one() {
//     return 1;
// }

// function calculate(initialValue, incrementValue) {
//     return initialValue() + incrementValue() + incrementValue();
// }

// console.log(calculate(two, one));

// var globalVar = 77;

// function scopeTest() {
//     var localVar = 88;
// }

// console.log(localVar);

// class Cake {
//     constructor(lyr) {
//         this.layers = lyr + 1;
//     }
// }

// var result = new Cake(1);
// console.log(result.layers);

// class Animal {
//     constructor(lg) {
//         this.legs = lg;
//     }
// }

// class Dog extends Animal {
//     constructor() {
//         super(4);
//     }
// }

// var result = new Dog();
// console.log(result.legs);


// class Animal {

// }

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = "meow";
//   }
// }

// var result = new Animal();
// console.log(result.noise);

// class Person {
//     sayHello() {
//         console.log("Hello");
//     }
// }

// class Friend extends Person {
//     sayHello() {
//         console.log("Hey");
//     }
// }

// var result = new Friend();
// result.sayHello();

// const meal = ["soup", "steak", "ice cream"]
// let [starter] = meal;
// console.log(starter);

// let obj = {
//     key: 1,
//     value: 4
// };

// let output = { ...obj };
// output.value -= obj.key;

// console.log(output.value);

// function count(...basket) {
//     console.log(basket.length)
// }

// count(10, 9, 8, 7, 6);


var result = {
    value: 7
  };
  console.log(JSON.stringify(result));


