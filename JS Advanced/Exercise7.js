function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    }

    // a) captures the inputs and displays it in this order
    Person.prototype.toString = function() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    }
    const person1 = new Person('James Bond', 73, 'Male')
    // b)
    const person2 = new Person('Madison Beer', 24, 'Female')
    console.log(person1.toString());
    console.log(person2.toString());

    // c)
     function Student(name, age, gender, cohort) {
        Person.call(this, name, age, gender);
        this.cohort = cohort;
     }

     // d) 
     Student.prototype.toString = function() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`;
      };
      
const student1 = new Student('Will Smith', 20, 'male', '2023');
const student2 = new Student('Margot Robbie', 19, 'female', '2024');

console.log(student1.toString());
console.log(student2.toString());

