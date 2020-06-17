/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
    constructor() {
        if(this.constructor == Creature) {
            throw new Error('Unable to instantiate Abstract Class Creature.');
        }
    }
    act() {
        throw new Error('This is an abstract method. It cannot be invoked')
    }
    move() {
        throw new Error('This is an abstract method. It cannot be invoked')
    }
}

class Human extends Creature {
    constructor(fullName, currentLocation) {
        super();
        this.fullName = fullName;
        this.currentLocation = currentLocation;
    }
    act() {
        console.log(`${this.fullName} is playing video games.`)
    }
    move(newLocation) {
        console.log(`${this.fullName} has left ${this.currentLocation} and is on their way to ${newLocation}`)
    }
    read(book) {
        console.log(`${this.fullName} is reading ${book}.`)
    }
}

class Dragon extends Creature {
    constructor(scaleColor, valueOfHoard) {
        super();
        this.scaleColor = scaleColor;
        this.valueOfHoard = valueOfHoard;
    }
    act() {
        console.log(`The dragon is guarding their hoard of treasures worth $${this.valueOfHoard}.`)
    }
    move() {
        console.log(`The dragon's ${this.scaleColor} scales sparkle as they fly over the burned down villages.`)
    }
    breatheFire() {
        console.log(`The ${this.scaleColor} dragon is breathing fire!`)
    }
}

class Snake extends Creature {
    constructor(lengthInFeet, locationNativeTo) {
        super();
        this.lengthInFeet = lengthInFeet;
        this.locationNativeTo = locationNativeTo;
    }
    act() {
        console.log('The snake is strangling its prey')
    }
    move() {
        console.log(`The ${this.lengthInFeet}ft snake is slithering through ${this.locationNativeTo}.`)
    }
    eatWhole(prey) {
        console.log(`The snake is swallowing the ${prey} whole!`)
    }
}



/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
    name;

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }

    code() {
        console.log(this.name + " is coding");
    }

    repeat() {
        console.log(this.name + " is repeating the above steps, yet another time");
    }

    explain() {
        //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
        console.log("I switched all the Person class's functions to prototypes, so the child's functions would always run first. As JavaScript checks the prototype of the parent last. For added measure I also made all the childrens' functions into fields, as JavaScript checks the fields on the object instance first.");
    }

}


class Teacher extends Person {

    //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat = () => {
        console.log(this.name + " loves to teach before eating");
    }

    sleep = () => {
        console.log(this.name + " sleeps after preparing the lesson plan");
    }

    code = () => {
        console.log(this.name + " codes first, then teaches it the next day.");
    }

    repeat = () => {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
}


class Student extends Person {
    //set up your methods in this student class, so all of these methods will override the methods from the super class.
    constructor(name) {
        super(name);
        this.name = name;
    }

    //eat method should print out - <stduent name> studies, then eats

    eat = () => {
        console.log(`${this.name} studies, then eats.`)
    }

    //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep

    sleep = () => {
        console.log(`${this.name} studies coding so much, that they dream about it in their sleep.`)
    }

    //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!

    code = () => {
        console.log(`${this.name} was first overwhelmed by coding, but kept at it, and now has become a coding guru!`)
    }

    //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.  

    repeat = () => {
        console.log(`${this.name} keeps on studying, coding, eating, and sleeping, and puts it all on repeat.`)
    }
}


const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();


//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:

class Cook {

    prepare(food1,food2,food3) {
        console.log("The cook is cooking " + food1, food2, food3);
    }

    prepare = function() {
        console.log('The cook is cooking');
    }

    explain = () => {
        console.log(/*"what could you do to get the prepare function to print out the food items that are being passed in to the function?  Once you figure it out, Write down your thought process in this explain method."*/
        "You could switch the first prepare function, witch takes the food items as arguement, into an arrow function, or a function expression, and switch the secound prepare funtion to shorthand method definition");
    }

}

const cook = new Cook();

cook.prepare("turkey","salami","pizza");

cook.explain();

