console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1 

let favoriteNumber = 5

let guessNumber = prompt("What is my favorite number?")

guessNumber = parseInt(guessNumber);

if (isNaN(guessNumber)) {
  console.log("You need to give me a valid number.");
} else {
 if (guessNumber == favoriteNumber) {
  alert('Congratulations!!! You guessed it! :-)');
} else if (guessNumber < favoriteNumber) {
  alert('Too low! >:-/ Try again.');
} else {
  alert('Too high! >:-/ Try again.');
}
}

// Exercise 2

var birthMonth = window.prompt("What is your birth month? If you are in the Northern Hemisphere, I will tell you what season you were born in.")

switch (birthMonth) {
  case "December": 
  case "January": 
  case "February":
    alert("You were born in winter.");
    break;
  case "March":
  case "April":
  case "May":
    alert("You were born in spring.");
    break;
  case "June":
  case "July":
  case "August":
    alert("You were born in summer.");
    break;
  case "September":
  case "October":
  case "November":
    alert("You were born in fall.");
    break;
  default:
    alert("You didn't give a valid answer!")
}

console.log(birthMonth)


// Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
      type = "Tank top";
      break;
  case "02":
      type = "T-Shirt";
      break;
  case "03":
      type = "Long Sleeve";
      break;
  case "04":
      type = "Sweat Shirt";
      break;
  default:
      type = "Other";
      break;
}

switch (colorId) {
  case "BL":
      color = "Black";
      break;
  case "BL":
      type = "Blue";
      break;
  case "RD":
      color = "Red";
      break;
  case "PU":
      color = "Purple";
      break;
  default:
      color = "White";
      break;
}

switch (sizeId) {
  case "S":
      size = "Small";
      break;
  case "M":
      size = "Medium";
      break;
  case "L":
      size = "Large";
      break;
  case "XL":
      size = "Extra Large";
      break;
  default:
      size = "One Size Fits All";
      break;
}

console.log(`Product: ${size} ${color} ${type}`);