class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
     
    display() {
        console.log(`Name: ${this.name}, Cost: $${this.price}.`);
    }
}

class Book extends Product {
    constructor(name, price, author) {
        super(name, price); // class the parent's class constructor
        this.author = author;
    }

    display() {
        super.display(); // call parent's class method
        console.log(`Written by ${this.author}.`);
    }
}

const book1 = new Book("Onepiece", 2000, "Eiichiro Oda");
console.log(book1);
book1.display();

const book2 = new Book("Sakamoto Days", 1500, "Unknown");
console.log(book2);
book2.display();