const form = document.querySelector('form');
// let btn = querySelector('form input[type=button]');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.querySelector("form input[name=firstname]").value;
    let surname = document.querySelector("form input[name=lastname]").value;
    let age = document.querySelector("form input[name=age]").value;
    let isDev = document.querySelector("form input[name=isDev]").checked;
    
    let person1 = new Person(name, surname, age, isDev);
    person1.toHtml();
    form.reset();
});

//person1.toHtml();