var name = 'Andres';
const states = 50;
var mathResp = 5 + 4;
var letterL = 76;
var msg = 'Hello World!'
var fr1 = {
    firstName: 'Charles',
    age: 21
}
var fr2 = {
    firstName: 'Abby',
    age: 27
}
var fr3 = {
    firstName: 'James',
    age: 18
}
var fr4 = {
    firstName: 'John',
    age: 17
}
var favVeg = ['broccoli', 'potato', 'carrot', 'peas']
var ageGauntlet = [
    per1 = {
        name: 'Bob',
        age: 35
    },
    per2 = {
        name: 'Chris',
        age: 20
    },
    per3 = {
        name: 'Becky',
        age: 6
    },
    per4 = {
        name: 'Tina',
        age: 21
    }
]
var str = 'Hello World'
var worldCount = getLength('Hello World') % 2
//The above are variables and arrays.

if (name.charCodeAt(name) == 76) {
    console.log('Back of the line!');
} else {
    console.log('Next!');
}
//The ACSII number for "L" is 76. (name.charCodeAt(name)==76) looks into 
//the 'name' variable and searches for letters with the value 76. The if-else 
//condition is set to print 'Back of the line' if the name starts with "L" and
//'Next!' if it does not.

function sayHello() {
    console.log('Hello World!')
}

sayHello(msg)

function checkAge() {
    if (fr1.age < 21) {
        console.log("Sorry " + fr1.firstName + ", you aren't old enough to view this page!")
    } else if (fr2.age < 21) {
        console.log("Sorry " + fr2.firstName + ", you aren't old enough to view this page!")
    } else if (fr3.age < 21) {
        console.log("Sorry " + fr3.firstName + ", you aren't old enough to view this page!")
    } else if (fr4.age < 21) {
        console.log("Sorry " + fr4.firstName + ", you aren't old enough to view this page!")
    } else if (ageGauntlet.age < 21) {
        console.log("Sorry " + ageGauntlet.name + ", you aren't old enough to view this page!")
    }
}

checkAge();

for (let i = 0; i < favVeg.length; ++i) {
    console.log(favVeg[i])
}

for (let i = 0; i < ageGauntlet.age; ++i) {
    console.log(ageGauntlet[i])
}

function getLength() {
    console.log(str.length);
}

getLength('Hello World')

if (worldCount = 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place.')
}