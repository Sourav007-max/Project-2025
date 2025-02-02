// 1. every object belongs to class
// 2. class does not exists in the real world, but object exists.
// 3. Every object will having has(properties/data members) part does(functions/ methods) part.
// 4. The constructor will be called whenever we are creating object.
class Student {
    constructor(s_name, s_age, s_email) {
        this.name = s_name
        this.age = s_age
        this.email = s_email
    }
    eat() {
        console.log(this.name,'is having a dinner');
    }
    learn() {
        console.log(this.name,'Is learning new concepts');
    }
}
s1 = new Student('Sourav', 23, 'sourav@gmail.com');// creating the of an object student class
s2 = new Student('Ankit', 26, 'an@kod.in');
s3 = new Student('Deep', 30, 'Deep@kod.in');
console.log(s1);// Accessing instance variables
s1.eat(); // Invoking instance method
console.log(s2);
s2.learn();
console.log(s3);
