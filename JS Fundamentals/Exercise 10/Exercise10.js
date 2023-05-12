function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    
    this.canDrive = function() {
        return this.age >= 16;
        }
      }
      
    class PersonClass {
      constructor(name, age) {
          this.name = name;
          this.age = age;
          this.human = true;
        }
        
     canDrive() {
          return this.age >= 16;
        }
      }
      
    const person1 = new Person('John', 18);
    const person2 = new Person('Sarah', 21);
    const person3 = new PersonClass('Mike', 12);
      
    console.log(person1.canDrive());
    console.log(person2.canDrive());
    console.log(person3.canDrive());