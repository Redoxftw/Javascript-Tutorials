// useful string properties & methods
let userName= " Bro Code ";
let phoneNumber= "123-456-7890";

//console.log (userName.length);
//console.log( userName.charAt
// console.log (userName.indexOf("o"));
//console.log (userName.lastlndexof("o"));
// userName = userName.trim();
// userName = userName .toUpperCase()
// userName = userName.toLowerCase();


phoneNumber=phoneNumber.replaceAll("-","");
console.log(phoneNumber);

let fullname="Redox Ftw";

let firstname=fullname.slice(0,fullname.indexOf(" "));
let lastname=fullname.slice(fullname.indexOf(" ")+1);
lastname=lastname.charAt(0).toUpperCase();
console.log(firstname);
console.log(lastname);

