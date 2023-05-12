const westley = {
    name: 'Westley',
    lastName: '',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    lastName: '',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name} ${person.lastName}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => (person.numFingers === 6) ? "Hello, my name is Inigo Montoya. You killed my father. Prepare to die!" : 'Nice to meet you.'
}
inigo.greeting(westley)
inigo.greeting(rugen)
