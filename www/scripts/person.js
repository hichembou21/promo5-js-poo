class Person {
    
    constructor(firstName, lastName, age, isDev = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isDev = isDev;
    }

    toHtml() {
        let p = document.createElement('p');
        let li = document.createElement('li');
        let text = 'is developper';
        if (!this.isDev) {
            text = 'is not developper';
        }
        p.textContent = `My name is ${this.firstName} ${this.lastName}, and I am ${this.age} old, ${text}`
        li.appendChild(p);
        document.querySelector('ul').appendChild(li);
    }
}






