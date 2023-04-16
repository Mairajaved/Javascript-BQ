// COURSE NAME
// Bano Qabil - MERN Stack
// INSTRUCTOR: Usama Usman
// uusman004@gmail.com
// Deadline : 16 Apr , 2023 11:59pm


// Task 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".

var zakatPercentage = 0.025;
var userInput = + prompt("Please enter number");
var result = zakatPercentage * userInput;
alert("Your zakat value is" + " "  + result);

// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

var familyMembers = + prompt("Please enter the total no of family members");
var fitrahMethod = prompt("Please choose fitrah method");
var methodPrice;
if (fitrahMethod.toLowerCase() == "wheat") {
    methodPrice = 320;
} else if(fitrahMethod.toLowerCase() == "date") {
    methodPrice = 2800;
} else if(fitrahMethod.toLowerCase() == "barley") {
    methodPrice = 800;
} else if(fitrahMethod.toLowerCase() == "raisins") {
    methodPrice = 6400;
} else if(fitrahMethod.toLowerCase() == "ajwaDate") {
    methodPrice = 10400;
} else {
    alert("wrong input, please try again");
}
var fitrahAmount = familyMembers * methodPrice;
alert("Your fitrah amount is" + " " + fitrahAmount);

// Task 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

var secretNumber = 1;
var guessNumber = +prompt("Guess the secret number");
if (guessNumber == secretNumber) {
  alert("Congratulations! You guessed the secret number.");
} else if (guessNumber < secretNumber) {
  alert("oh! Your guessed is too low.");
} else {
  alert("oh! Your guessed is too high.");
}

// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

var userName = prompt("please enter your name");
var firstLetter = userName.charAt(0).toUpperCase() + userName.slice(1);
alert(firstLetter);

// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

var contactNumbers = [];
var contactNames = [];

for (i = 0; i < 3; i++) {
  var userNumber = prompt("Enter your number");
  var userName = prompt("Enter your name");
  contactNumbers.push(userNumber);
  contactNames.push(userName);
}
for (i = 0; i < contactNumbers.length; i++) {
  console.log(contactNumbers[i]);
}
for (i = 0; i < contactNames.length; i++) {
    console.log(contactNames[i]);
  }

// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

var chocolates = ["sneakers", "dairymilk", "bounty", "hersheys", "galaxy"];
var position = +prompt("Which position you want to remove");
var remove = chocolates.splice(position - 1, 1);
console.log("removed item is" + " " + remove);
console.log("remaining items" + " " + chocolates);
console.log("total number of items remaining." + " " + chocolates.length);

// Task 7
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

var nationality = prompt("enter your nationality");
var gender = prompt("enter your gender");
var age = +prompt("enter your age");
var martialStatus = prompt("are you married?");
if (
  nationality.toLowerCase() === "pakistani" ||
  nationality.toLowerCase() === "indian"
) {
  // alert("you are eligible to vote");
  if (gender.toLowerCase() === "male" && age >= 18) {
    alert("you are eligible to vote");
  } else if (gender.toLowerCase() === "female" && age >= 18) {
    if (martialStatus.toLowerCase() === "yes") {
      alert("you are eligible to vote");
    } else {
      alert("you are not eligible to vote");
    }
  } else {
    alert("you are not eligible to vote");
  }
} else {
  alert("you are not eligible to vote");
}

// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)
var WorldCupSquad = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
];
var indiaMatch = WorldCupSquad.slice(0, 11);
console.log(indiaMatch);
console.log(WorldCupSquad);//for my satisfaction