let car = {
    make: "Porsche",
    model: '911',
    year: 1964,

    description() {
    
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
    };
    car.description(); //works

    // a) setTimeout
    /*
    setTimeout(() => {
        car.description();
    }, 200); */

    // b) carClone
    let carClone = {...car};
    carClone.year = 2023;

    carClone.description();

    /* c) description() will still use the original values since the setTimeout function captures the current state of the 'car' 
    object at the time the setTimeout is called. Therefore, even if you modify the properties of the car object after setting the timeout */

    // d) 'bind(car)'

    setTimeout(car.description.bind(car), 200);

    /* e) If you change another property of the car by creating a clone and overriding it, the bound value from 'd)' will still be used by setTimeout.
    The bound function preservces the context of 'this' at the time of binding, so any subsequent changes to the properties of the origninal 'car' object
    or its clones will not affect the bound function's behaviour when called by 'setTimeout'*/

    