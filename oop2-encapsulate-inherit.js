/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 
*/
    //your code here...

class Book {
    #title
    #author;
    #publisher;
    #reviews = [];
    constructor(title, author, publisher) {
        this.#title = title;
        this.#author = author;
        this.#publisher = publisher;
    }
    getBookInfo() {
        return {'Title' : this.#title, 'Author': this.#author, 'Publisher': this.#publisher, 'Reviews': this.#reviews};
    }
    getTitle() {
        return this.#title;
    }
    getAuthor() {
        return this.#author;
    }
    getPublisher() {
        return this.#publisher;
    }
    setTitle(title) {
        this.#title = title;
    }
    setAuthor(author) {
        this.#author = author;
    }
    setPublisher(publisher) {
        this.#publisher = publisher;
    }
    addReview(review) {
        this.#reviews.push(review.getReviewInfo())
    }
    getReviewsArray() {
        return this.#reviews;
    }
}



class Author {
    #name;
    #books = [];
    constructor(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
    getBooks() {
        return this.#books;
    }
    setName(name) {
        this.#name = name;
    }
    setBooks(book) {
        this.#books.push(book);
    }
}

class Publisher {
    #publisherName
    #authors = [];
    #books = [];
    constructor(publisherName) {
        this.#publisherName = publisherName;
    }
    getAuthors() {
        return this.#authors;
    }
    getBooks() {
        return this.#books;
    }
    setAuthors(author) {
        this.#authors.push(author);
    }
    setBooks(book) {
        this.#books.push(book);
    }
}

class Review {
    #rating;
    #user;
    constructor(rating, user) {
        this.#rating = rating;
        this.#user = user;
    }
    getReviewInfo() {
        return {'Review': this.#rating, 'User': this.#user}
    }
    getRating() {
        return this.#rating;
    }
    getUser() {
        return this.#user;
    }
    setRating(rating) {
        this.#rating = rating;
    }
    setUser(user) {
        this.#user = user;
    }
}


/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a company name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.
*/


    //your code here...

class Umbrella {
    #orgName;
    #yearFormed = 1999;
    #listOfCompanies = ['TEKsystems', 'Aerotek', 'Aston Carter'];
    #updatedList;
    constructor(orgName) {
        this.#orgName = orgName;
    }
    acquireCompany(compName) {
        if(this.#listOfCompanies.includes(compName)) {
            console.log(`${compName} is already in the Allegis Group, and therefore cannot be acquired.`)
        } else {
            this.#listOfCompanies.push(compName)
        }
        return this.#listOfCompanies;
    }
    consolidateCompany(compName) {
        if(this.#listOfCompanies.includes(compName)) {
            this.#updatedList = this.#listOfCompanies.filter(function(company) {return company !== compName})
        } else {
            console.log(`${compName} is not in the Allegis Group, and therefore cannot be consolidated.`)
        }
        return this.#updatedList;
    }
}

class Company extends Umbrella {
    #compName;
    #employeeCount;
    #brandColors;
    #yearFounded;
    constructor(compName, employeeCount, brandColors, yearFounded) {
        super()
        this.#compName = compName;
        this.#employeeCount = employeeCount;
        this.#brandColors = brandColors;
        this.#yearFounded = yearFounded;
    }
    reBrand(colorsArray) {
        return this.#brandColors = colorsArray;
    }
    makeAnnouncement() {
        console.log(`${this.#compName} is now offering a new benefits package to all ${this.#employeeCount} employees!`)
    }
}

class Site extends Company {
    #location;
    #compName;
    #inBusiness = true;
    #isIndoor = true;
    constructor(compName, location) {
        super(compName);
        this.#compName = compName;
        this.#location = location;
    }
    hostEvent(eventName) {
        console.log(`${this.#compName} is hosting ${eventName} at their ${this.#location} location!`)
    }
    closeLocation() {
        console.log(`${this.#compName} is closing their ${this.#location} location, permanently.`)
        this.#inBusiness = false;
    }
    getInBusinessStatus() {
        return this.#inBusiness;
    }
}

class Employee extends Site {
    #employeeName;
    #jobTitle;
    #salary;
    #gender
    static hrComplaints = [];
    constructor(compName, location, employeeName, jobTitle, salary, gender) {
        super(compName, location);
        this.#employeeName = employeeName;
        this.#jobTitle = jobTitle;
        this.#salary = salary;
        this.#gender = gender;
    }
    getRaise(raiseAmount){
        this.#salary += raiseAmount;
    }
    getSalary() {
        return this.#salary;
    }
    fileComplaint(complaint) {
        Employee.hrComplaints.push(complaint)
        console.log(`${this.#employeeName} has filed the following complaint: ${complaint}`)
    }
    checkHRComplaints() {
        return Employee.hrComplaints;
    }
}

const allegis = new Umbrella('Allegis');

const tekSystems = new Company('TEKsystems', 23000, ['Dark Blue', 'Light Blue', 'Orange'], 1999);
const aerotek = new Company('Aerotek', 21000, ['Blue', 'Orange'], 1983);
const astonCarter = new Company('Aston Carter', 900, ['Green'], 1997);

const tekLexington = new Site('TEKsystems', 'Lexington, Kentucky');
const tekIrving = new Site('TEKsystems', 'Irving, Texas');
const tekBaltimore = new Site('TEKsystems', 'Baltimore, Maryland');

const aeroProvidence = new Site('Aerotek', 'Providence, Rhode Island');
const aeroOmaha = new Site('Aerotek', 'Omaha, Nebraska');
const aeroWausau = new Site('Aerotek', 'Wausau, Wisconsin');

const astonStockholm = new Site('Aston Carter', 'Stockholm, Sweden');
const astonGurgaon = new Site('Aston Carter', 'Gurgaon, India');
const astonBrisbane = new Site('Aston Carter', 'Brisbane, Australia');

const ceoJayAlvather = new Employee('TEKsystems', 'Columbia, Maryland', 'Jay Alvather', 'CEO', 230000, 'Male');
const managerLinda = new Employee('TEKsystems', 'Lexington, Kentucky', 'Linda Belcher', 'Manager', 65000, 'Female');
const secErin = new Employee('Aerotek', 'Providence, Rhode Island', 'Erin Hannon', 'Secretary', 35000, 'Female');
const engineerChip = new Employee('TEKsystems', 'Irving, Texas', 'Chip', 'Engineer', 50000, 'Male');
const engineerDale = new Employee('TEKsystems', 'Irving, Texas', 'Dale', 'Engineer', 50000, 'Male');
const foAngela = new Employee('Aerotek', 'Omaha, Nebraska', 'Angela Shrute', 'Financial Officer', 60000, 'Female');
const janitorMichael = new Employee('Aerotek', 'Wausau, Wisconsin', 'Michael Scott', 'Janitor', 30000, 'Male');
const marketerJim = new Employee('Aston Carter', 'Stockholm, Sweden', 'Jim Halpert', 'Marketer', 50000, 'Male');
const hrHolly = new Employee('Aston Carter', 'Gurgaon, India', 'Holly Flax', 'HR Personnel', 40000, 'Female');
const lawyerJeff = new Employee('Aston Carter', 'Brisbane, Australia', 'Jeff Winger', 'Lawyer', 75000, 'Male')


/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relevant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relevant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...

    //Began working on bonus, unfinished

    class Bookstore {
        #storeName;
        #booksArray = [];
        constructor(storeName) {
            this.#storeName = storeName;
        }
        addBook(book) {
            this.#booksArray.push(book);
        }
        getBookArray() {
            return this.#booksArray.map(book => book.getBookInfo())
        }
    }

    const barnesAndNoble = new Bookstore('Barnes and Noble');

    barnesAndNoble.addBook(myBook = new Book('My Book', 'Me', 'My Publisher'));
    myBook.addReview(review1 = new Review('10/10', 'Myself'));
    barnesAndNoble.addBook(secondBook = new Book('My Second Book', 'Me', 'My Publisher'));
    secondBook.addReview(review2 = new Review('0/10', 'Not Me'));
    secondBook.addReview(review3 = new Review('3/10', 'Other Not Me'));
    console.log(barnesAndNoble.getBookArray());