class SmallDog {
    
    constructor(name, race, birthdate) {
        this.name = name;
        this.race = race;
        this.birthdate = birthdate;
    }
    bark() {
        alert('Waf');
    }
    toString() {
        return `I am a Dog, My name is ${this.name}, my race is ${this.race}
        and I am born in ${this.birthdate}`;
    }

}