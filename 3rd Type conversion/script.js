let age=window.prompt("Enter age");
age=Number(age);
console.log("Happy Birthday you are ",age+1," years old!");
let type=typeof age;
document.getElementById("type").innerHTML=type;
document.getElementById("age").innerHTML=age;