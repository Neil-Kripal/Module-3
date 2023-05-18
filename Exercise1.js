// First Counter
// defaults to 0 if not provided and will increase by one if not changed
function makeCounter(startFrom = 0, incrementBy = 1)   {
    let currentCount = startFrom;

    return function() {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
};
}

let counter1 = makeCounter(0,3);

counter1(); // 1
counter1(); // 2

console.log('\n');

// a) It creates a new counter which is indepentdent to counter1
// b)
let counter2 = makeCounter(10,5);

counter2(); // 1
counter2(); // 1




