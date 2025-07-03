class Animal{
    constructor(name, speaks) {
        this.name = name;
        this.speaks = speaks;
    }
    static info() {
        console.log('This is an Animal class');
    }
    speak() {
        console.log(`${this.name} says ${this.speaks}`);
    }
} 
console.log(Animal.info());
let dog = new Animal('Dog', 'Woof Woof');
dog.speak();
let cat = new Animal('Cat', 'Meow Meow');
cat.speak();