let string = "Alex";           
let undefined1;                
let array = [1, 3, 6];           
let boolean = true;              
let number = 1;               
let nul = null;               
let object = { name: "Alex" };   

console.log("stringType:", typeof string);
console.log("nullType:", typeof nul);
console.log("numberType:", typeof number);
console.log("objectType:", typeof object);
console.log("booleanType:", typeof boolean);
console.log("arrayType:", typeof array);
console.log("undefinedType:", typeof undefined);

let name = "Alex";
let age = 29;
let city = "Kiev";
console.log(`Привет, меня зовут ${name}\nМне ${age} лет\nЯ живу в городе ${city}`);

let number2 = prompt("Введіть число:");

if (number2 === "10369") {
  alert("Поздравляю!");
  let result = number2.split("").join(" ");
alert(result);
} 
else{alert("Введите число 10369")}


