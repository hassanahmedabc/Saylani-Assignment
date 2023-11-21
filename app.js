// Aissg 20 - 25
// Question No 1
let userFirstName = prompt("Enter your first name");
let userLastName = prompt("Enter your last name");
const fullName = userFirstName + " " + userLastName;
alert(`Wel come to our land, ${fullName}`);

//Question No 2
let favMobilePhone = prompt("Enter your favourite mobile phone model");
const findLength = favMobilePhone.length;
document.write(
  `My favourite phone is: ${favMobilePhone} <br> Length of string is: ${favMobilePhone.length}`
);

//Question No 3
let text = "Pakistani";
let findIndexOfText = text.indexOf("n");
document.write(`String: ${text} <br> Index of 'n': ${findIndexOfText}`);

//  Question No 4
let text_2 = "Hello World";
let lastIndex = text_2.lastIndexOf("l");
document.write(
  `<br><br>String: ${text_2} <br> Last index of 'I': ${lastIndex}`
);

// Question No 5
let text_3 = "Pakistani";
let index3Cha = text_3[3];
document.write(
  `<br><br>String: ${text_3} <br> Character at index 3 is: ${index3Cha}`
);

// Question No 6
let userFirstName_2 = prompt("Enter your first name");
let userLastName_2 = prompt("Enter your last name");
let bothInConcate = userFirstName_2.concat(" " + userLastName_2);
alert(`Wel come to our land, ${bothInConcate}`);

// Question No 7
const cityName = "Hyderabad";
const replaceByAnother = cityName.replace("Hyder", "Islam");
document.write(
  `<br><br>City: ${cityName} <br>After replacement: ${replaceByAnother}`
);
// Another method to replace the value
let name = "Hyderabad";
let changeName = name.indexOf("Hyder");
if (changeName != -1) {
  name = name.slice(0, changeName) + "Islam" + name.slice(changeName + 5);
}
console.log(name);

// Question No 8
let longestString =
  "Ali and Sami are best friends.They play cricket and football together.";
for (var i = 0; i < longestString.length; i++) {
  if (longestString.slice(i, i + 3) === "and") {
    longestString =
      longestString.slice(0, i) + "&" + longestString.slice(i + 3);
  }
}
console.log(longestString);

// Question No 9
let stringNumber = "472";
var stringToNumber = Number(stringNumber);
console.log(stringToNumber);

// Question No 10
let userFavouriteDryFruit = prompt("What is your favourite dry fruit?");
let storeDryFruit = userFavouriteDryFruit.toLocaleUpperCase();
document.write(
  `<br><br>User input: ${userFavouriteDryFruit} <br>Upper Case: ${storeDryFruit}`
);

// Question No 11
let userFavProgram = prompt("Enter your favourite programming language");
let stringFirstCap = userFavProgram[0].toUpperCase();
let stringRestInLowerCase = userFavProgram.slice(1).toLowerCase();
document.write(
  `<br><br>User input: ${userFavProgram} <br>Title Case: ${
    stringFirstCap + stringRestInLowerCase
  }`
);

// Question No 12
let number = 35.36;
let converIntoStr = number.toString() * 100;
document.write(`<br><br>Number: ${number}<br>Result: ${converIntoStr}`);

// Question No 13
var userName = prompt("Enter your name");
var sign = /[^a-zA-Z0-9]/gi;
if (sign.test(userName)) {
  alert("Please enter a valid username");
} else {
  console.log(`username is ${userName}`);
}

// Question No 14
let bakeriesItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let askingAboutItems = prompt(
  "Welcome to Sitara Bakery.What do you want to order sir/ma'am"
);
let checkingOut = "Available";
let matchFound = false;
for (var i = 0; i < bakeriesItems.length; i++) {
  if (bakeriesItems[i] === askingAboutItems) {
    matchFound = true;
    console.log(`${bakeriesItems[i]} is ${checkingOut} at index ${i}`);
  }
}
if (matchFound === false) {
  console.log(
    `We are sorry.${askingAboutItems} is not available in our bakery`
  );
}

// Question No 15
let password = prompt("Enter your password");
let matchNum = false;
for (var i = 0; i < password.length; i++) {
  if (isNaN(parseInt(password[i]))) {
    console.log(`Entered password: ${password}`);
    matchNum = true;
    break;
  } else {
    alert(`Password can not begin with a number`);
    break;
  }
}

if (isNaN(parseInt(password.length)) < 6) {
  alert("Please enter a valid number");
}

//  Question No 16
var university = ["University of Karachi"];
var convIntoStri = university.toString(university);
for (var i = 0; i < convIntoStri.length; i++) {
  const element = convIntoStri[i];
  console.log(element);
}
// Question No 17
let lastCha = "Pakistan";
let findLastCha = lastCha.charAt(7);
console.log(`User input: ${lastCha} and last charac is: ${findLastCha}`);

// Question No 18
var str = "The quick brown fox jumps over the lazy dog";
var findFirst = str.indexOf("the");
console.log(findFirst);
var findSome = "";
for (var i = 0; i < 3; i++) {
  var findValue = Math.floor(Math.random() * str.length);
  findSome += str[findValue];
}

// assign 25-30
// Question No 1

let positiveInteger = 3.45214;
let conIntoRound = Math.round(positiveInteger);
let conIntoRound2 = Math.floor(positiveInteger);
let conIntoRound3 = Math.ceil(positiveInteger);
document.write(
  `Number: ${positiveInteger} <br>round off value: ${conIntoRound} <br>floor value: ${conIntoRound2} <br>Ceil value: ${conIntoRound3}`
);

// Question No 2
let negativePoint = -2.673;
let negIntoRound = Math.round(negativePoint);
let negIntofloor = Math.floor(negativePoint);
let negIntoCeil = Math.ceil(negativePoint);
document.write(
  `<br><br>Number: ${negativePoint} <br>round off value: ${negIntoRound} <br>floor value: ${negIntofloor} <br>Ceil value: ${negIntoCeil}`
);

// Question No 3
let absNumber = -4;
let absNumber2 = Math.abs(absNumber);
document.write(`<br><br>The absolute value of ${absNumber} is ${absNumber2}`);

// Question No 4
let randomDice = Math.round(Math.random() * 10);
console.log(`random dice value: ${randomDice}`);

// Question No 5
let randomCoinValue = ["Tails", "Heads"];
let emptyStr = "";
var randomNum;
for (var i = 0; i < randomCoinValue.length; i++) {
  randomNum = Math.floor(Math.random() * randomCoinValue.length);
  emptyStr = randomCoinValue[randomNum];
}
document.write(`<br><br>${randomNum} random coin value: ${emptyStr}`);

// Question No 6

let randomNumShow = Math.round(Math.random() * 100);
console.log(`Random number between 1 and 100: ${randomNumShow}`);

//Question No 7
let askUserWeight = prompt("Enter your weight in kilograms");
switch (askUserWeight) {
  case "Kgs":
    console.log(askUserWeight);
    break;

  default:
    console.log();
    break;
}

// Question No 8
let secNum = Number(prompt("Enter a number between 1 and 10"));
let numberGuess = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomNum = Math.floor(Math.random() * numberGuess.length) + 1;
if (secNum === numberGuess[5]) {
  alert(`Your secret number is ${secNum}`);
} else {
  alert("Try again!");
}

// assign 30-34

// Question No 1
let currentDate = new Date();
document.write(currentDate);

// Question No 2
let currentMonth1 = new Date();
let months1 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let findMonth = currentMonth1.getMonth();
document.write(`<br><br>Current month:${months1[findMonth]}`);

// Question No 3
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = new Date();
let finddays = date.getDay();
let first3Letters = days[finddays].slice(0, 3);
console.log(first3Letters);

// Question No 4
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dates = new Date();
let funDayFind = dates.getDay();
if (days[funDayFind] === "Saturday" || days[funDayFind] === "Sunday") {
  alert("It's Fun day");
} else {
  alert(`Today is ${days[funDayFind]}`);
}

// Question No 5
let date1 = new Date();
let checkDates = date1.getDate();
if (checkDates < 16) {
  console.log(`First fifteen days of the month`);
} else {
  console.log(`Last days of the month`);
}

// Question No 6
let currentDateShow = new Date();
let checkPastMilliSec = currentDateShow.getTime();
let checkPastMinutes = checkPastMilliSec / (1000 * 60 * 60);
console.log(`Curent Date: ${currentDateShow}`);
console.log(`Elapsed milliseconds since January 1, 1970: ${checkPastMilliSec}`);
console.log(`Elapsed minutes since January 1, 1970: ${checkPastMinutes}`);

// Question No 7
let dates2 = new Date();
let hrs = dates2.getHours();
//let min = dates2.getMinutes();
//let sec = dates2.getSeconds();
if (hrs < 12) {
  console.log("It's AM");
} else {
  console.log(`It's PM`);
}

// Question No 8
let dates3 = new Date("Dec 31 2020");
console.log(dates3);

// Question No 9
let ramadanDays = new Date("June 18, 2015");
let dates4 = new Date();
let findRestDays = dates4 - ramadanDays;
let calcToFindRestDays = Math.floor(findRestDays / (1000 * 60 * 60 * 24));
console.log(`${calcToFindRestDays} days have passed since 1st Ramadan, 2015`);

// Question No 10
let currentdate = new Date("Sat Dec 05 2015");
let seconds = currentdate.getSeconds();
let elapsedSec = (currentdate - seconds) / (1000 * 60);
console.log(
  `On reference date ${currentdate}, ${elapsedSec} seconds had passed since beginning of 2015`
);

// Question No 11
const curDate = new Date();
console.log(curDate);
const hours = curDate.setHours(17);
console.log(`1 hour ago,it was ${curDate}`);

// Question No 12
let dates5 = new Date();
console.log(`current date:${dates5}`);
let yearsBack = dates5.setFullYear(1923);
console.log(`100 years back:it was ${dates5}`);

// Question No 13
let userAge = Number(prompt("Enter your current age to get your birthday"));
let dates6 = new Date();
let checkBirthDay = dates6.getFullYear() - userAge;
document.write(
  `<br><br>Your age is ${userAge} <br>Your birth year is ${checkBirthDay}`
);

// Question No 14
let customerName = "ABC Customer";
let dates7 = new Date();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonth = dates7.getMonth();
let checkCurMonth = months[currentMonth];
let units = 410;
let chargesPerUnit = 16;
let latePaymentCharges = 350;
let dueDate = new Date("October 13, 2023");
function myElectricBill() {
  if (checkCurMonth === months[9] && dates7 <= dates7.setDate(14)) {
    let total = units * chargesPerUnit;
    let grossTotal = total + latePaymentCharges;
    document.write(`<br><br><h2>K-Electric Bill</h2>
    Customer Name: <b>${customerName}</b>
    <br>Month:<b> ${checkCurMonth}</b>
    <br>Number of units: <b>${units}</b>
    <br>Charges per unit: <b>${chargesPerUnit}</b><br>
    <br>Net Amount Payable (Within Due Date):<b> ${total}</b>
    <br>Late payment surcharge :<b> ${latePaymentCharges}</b><br>
    Gross Amount Payable (after Due Date):<b> ${grossTotal}</b>`);
  }
}

myElectricBill();

// assign 35-38
// Question No 1
function myFunction() {
  const date = new Date();
  console.log(date);
}
myFunction();
// Question No 2
const firstName = prompt("Enter your first name");
const lastName = prompt("Enter your last name");
function fullName(fName, lName) {
  alert(`Welcome to our land ${fName} ${lName}`);
}
fullName(firstName, lastName);
// Question No 3
let num1 = parseFloat(prompt("Enter first number to calculate"));
let num2 = parseFloat(prompt("Enter second number to calculate"));
function myCalculation() {
  const totalSum = num1 + num2;
  return totalSum;
}
var save = myCalculation();
console.log(save);

// Question No 4
function calcul(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "%") {
    return num1 % num2;
  } else {
    alert("Please enter a computed number");
  }
}
let store = calcul(10, "/", 3);
console.log(store);

// Question No 5
function square(number) {
  return number * number;
}
let save = square(4);
console.log(save);

// assign 43-48
// Question No 1
const clickOnLink = document.createElement("a");
clickOnLink.setAttribute("href", "#");
clickOnLink.setAttribute("onclick", "myHandler()");
clickOnLink.innerText = "Click me";
document.body.appendChild(clickOnLink);
console.log(clickOnLink);
function myHandler() {
  alert("Welcome to our land");
}

// Question No 2
const mobilePhones = document.querySelector(".mobilePhones");
const imgTag = document.getElementsByTagName("img");
const mobilesPic = [
  {
    imgsSrc: "./Assets/1.jpg",
    descrip: "iPhone6Plus.gif",
  },
  {
    imgsSrc: "./Assets/2.jpg",
    descrip: "Galaxys6Plus.gif",
  },
  {
    imgsSrc: "./Assets/3.jpg",
    descrip: "V10.gif",
  },
  {
    imgsSrc: "./Assets/4.jpg",
    descrip: "HuaweiE5.gif",
  },
];
mobilesPic.forEach((pictures) => {
  mobilePhones.innerHTML += `<div><img onclick="myhandler()" src="${pictures.imgsSrc}" alt="">
    <p>${pictures.descrip}</p></div>`;
});
function myhandler() {
  alert("Thanks for purchasing a phone from us");
}

// Qusetion No 3
const studentsMarks = [
  {
    serial: 0,
    name: "Sami",
    class: "10th",
    dlt: "Delete",
    id: "one",
  },
  {
    serial: 1,
    name: "Fahad",
    class: "10th",
    dlt: "Delete",
    id: "one",
  },
  {
    serial: 2,
    name: "Ayaz",
    class: "9th",
    dlt: "Delete",
    id: "one",
  },
  {
    serial: 3,
    name: "Umair",
    class: "9th",
    dlt: "Delete",
    id: "one",
  },
  {
    serial: 4,
    name: "Saqib",
    class: "10th",
    dlt: "Delete",
    id: "one",
  },
  {
    serial: 5,
    name: "Haroon",
    class: "10th",
    dlt: "Delete",
    id: "one",
  },
];
const table = document.querySelector("table");
console.log(table.firstElementChild);
const check = studentsMarks.map(function (student) {
  table.innerHTML += `<tr>
    <td>${student.serial}</td>
    <td>${student.name}</td>
    <td>${student.class}</td>
    <td id='${student.id}' onclick="deleteHandler('${student.serial}')">${student.dlt}</td>
</tr>`;
  return student.serial;
});
console.log(check);
const idSelect = document.querySelectorAll("#one");
console.log(idSelect);
console.log(check[0]);
function deleteHandler(check) {
  if (check) {
    table.childNodes[2].remove();
  }
}
// Question No 4
const picture = document.getElementById("picture");
function myImg() {
  picture.setAttribute("src", "./Assets/img2.jpg");
  picture.setAttribute("onmouseout", "myHandle()");
}
function myHandle() {
  picture.src = "./Assets/img1.jpg";
}

// Question No 5
const h1 = document.querySelector("h1");
let index = 0;
function increaseBtn() {
  h1.innerHTML = index++;
}
function decreaseBtn() {
  h1.innerHTML = index--;
}
// Assign 49 - 53
