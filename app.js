let firstName = 'Matt';
const numStates = 50;
let adding4and5 = 5 + 4;
let helloWorld = 0;

/* Alerts based on beginning letter of firstName. (If first letter > L) */
if (firstName.charCodeAt(0) > 76) {
    alert('Back of the line!');
} else {
    alert('Next!');
}

sayHello();

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);


let faveVeggies = ["Lettuce", "Broccoli", "Carrots"];

/* Prints my favorite vegetabes to console. */
for (i = 0; i < faveVeggies.getLength; i++) {
    console.log(faveVeggies[i]);
}

/* Five objects containing names and ages. */
let person1 = {
    name: "John",
    age: 25,
};
let person2 = {
    name: "Charlie",
    age: 18,
};
let person3 = {
    name: "Chad",
    age: 28,
};
let person4 = {
    name: "Martha",
    age: 17,
};
let person5 = {
    name: "Alex",
    age: 22,
};

/* Checks ages on the above objects. */
let namesAndAges = [person1, person2, person3, person4, person5];

for (i = 0; i < namesAndAges.length; i++) {
    checkAge(namesAndAges[i].name, namesAndAges[i].age);
}

/* Gets length of string and checks if it is even or odd. */
helloWorld = getLength("Hello World");

if (helloWorld%2 == 0) {
    console.log("The world is even and nice!");
} else {
    console.log("The world is an odd place!");
}



/* Gets length of string and returns result */
function getLength(anyWord) {
    return anyWord.length;
}

/* Function that greets the world with an alert. */
function sayHello() {
    return alert("Hello World!");
}

/* Function that checks age-restriction. */
function checkAge(name, age) {

    if (age < 21) {
        alert("Sorry, " + name + " you aren't old enough to view this page!");
    }

}
