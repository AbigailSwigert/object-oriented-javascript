//1. Create a Class called WhyClass.  This class should have one property, and two methods.  The property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...

class WhyClass {
    constructor() {
      this.purpose = 'Classes are templates for creating objects, defining classes allows you to create multiple objects that share properties and methods without repeating the same code over and over.'
    }
    explain() {
      console.log(this.purpose)
    }
    pieces() {
      console.log('constructor, properties, methods')
    }
}
  
const newClass = new WhyClass
newClass.explain();
newClass.pieces();

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */


//your code here...

class Animal {
    constructor(species, maxWeightInLbs, funFact, food, movement) {
        this.species = species;
        this.maxWeightInLbs = maxWeightInLbs;
        this.funFact = funFact;
        this.food = food;
        this.movement = movement;
    }

    eat() {
        console.log(`The ${this.species} is eating ${this.food}.`)
    }

    move() {
        console.log(`The ${this.species} is ${this.movement} through the Amazon!`)
    }
}

const capybara = new Animal('Capybara', 140, 'Capybaras are very sociable and live in groups of 10-30.', 'grass', 'walking')

const giantOtter = new Animal('Giant River Otter', 71, 'A Giant River Otter can reach 5ft in length plus a 3ft tail.', 'fish', 'swimming')

const jaguar = new Animal('Jaguar', 348, 'Jaguars can hunt in the tress, so you may hear them, but be unable to see them through the dense canopy.', 'a capybara', 'stalking prey')

const squirrelMonkey = new Animal('Squirrel Monkey', 2.4, "The fur on a squirrel monkey's face is black and white, vaguely resembling a skull.", 'fruits', 'jumping from tree to tree')

const hoatzin = new Animal('Hoatzin', 1.78, "Hoatzin are commonly refered to as the 'punk-rock bird' due to their mohawk-like crest.", 'swamp plants', 'flying')

const blackCaiman = new Animal('Black Caiman', 800, 'The Black Caiman is the largest reptile in the Amazon.', 'an older, weaker Caiman', 'swimming lazily')

const greenAnaconda = new Animal('Green Anaconda', 150, 'Green Anacondas are non-venomous, killing their prey by suffocaton then swallowing it whole.', 'a jaguar', 'slithering')


/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/


class Shape {
    //your code here...
    constructor(name, sides, base, height, length, width, radius) {
        this.name = name;
        this.sides = sides;
        this.base = base;
        this.height = height;
        this.length = length;
        this.width = width;
        this.radius = radius;
    };
    calcHeight() {
        return Math.sqrt(Math.pow(this.sides[1], 2) - Math.pow((.5 * this.base), 2)).toFixed(2)
    }
    calcArea() {
        if(this.name === 'triangle') {
            console.log(`${this.name}'s area is calculated to be : ${ 0.5 * this.base * this.height}`);
        } else if (this.name === 'rectangle') {
           console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
        } else if (this.name === 'circle') {
            console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius**2).toFixed(2)}`);
        }
    }
    calcPerimeter() {
        console.log(`${this.name}'s perimeter is calculated to be : ${this.sides.reduce((a,b) => a + b, 0)}`)
    }
    calcCircumference() {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }
}

const myTriangle = new Shape('triangle', [4,7,7], null, null, null, null, null);
myTriangle.base = myTriangle.sides[0];
myTriangle.height = myTriangle.calcHeight();

const myRectangle = new Shape('rectangle', [2,5,2,5], null, null, 2, 5, null);

const myCircle = new Shape('circle', null, null, null, null, null, 5);

// console.log(myTriangle);
// myTriangle.calcArea();
// myTriangle.calcPerimeter();
// console.log(myRectangle);
// myRectangle.calcArea();
// myRectangle.calcPerimeter();
// console.log(myCircle);
// myCircle.calcArea();
// myCircle.calcCircumference();


// const triangle = {
//     name : "triangle",
//     sides : [4,7,7], //lengths of each side
//     base : null,
//     height : null, //determine this height using basic geometry.  You may need to research this one.
//     calcArea : function() {
//         console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
//     },
//     calcPerimeter : function() {
//         console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`)
//     }
// }

// triangle.base = triangle.sides[0];  //base is the 1st side in the triangle.sides array.
// triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

// console.log(triangle);
// triangle.calcArea();
// triangle.calcPerimeter();

// const rectangle = {
//     name : "rectangle",
//     sides : 4,
//     length : 2,
//     width : 5,
//     calcArea : function() {
//         console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
//     },
//     calcPerimeter : function() {
//         console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width) }`)
//     }
// }

// console.log(rectangle);
// rectangle.calcArea();
// rectangle.calcPerimeter();

// const circle = {
//     name : "circle",
//     sides : 1,
//     radius : 5,
//     calcArea : function() {
//         console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius**2).toFixed(2)}`);
//     },
//     calcCircumference : function() {
//         console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
//     }
// }

// console.log(circle);
// circle.calcCircumference();
// circle.calcArea();


/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

// class Earth {
//     name;
//     planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

//     constructor(name,num) {
//         this.name = name;
//         this.planetNum = num;
//     }

// }

// const earth = new Earth('earth',3);
// console.log(earth);

const earth = {
    name: 'Earth',
    planetNum: 3,
}
//console.log(earth);




