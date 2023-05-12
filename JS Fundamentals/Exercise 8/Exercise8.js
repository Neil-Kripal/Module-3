const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

function printCity(city) {
    for (let prop in city) {
        console.log(`${prop}: ${city[prop]}`);
    }
}

console.log('\n');
printCity(sydney);

const newYork = {
    name: 'New York',
    population: 8_336_817,
    state: 'New York',
    founded: '1624',
    timezone: 'America/New_York'
}

console.log('\n');
printCity(newYork);
console.log('\n');


