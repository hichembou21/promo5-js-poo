
let doge = new SmallDog('fido', 'corgi', '10/11/2017');
let doge2 = new SmallDog('rex', 'husky', '05/10/2017');

// alert(doge2);
let p = document.createElement('p');
p.textContent = doge;
document.querySelector('body').appendChild(p);

console.log(doge);
console.log(doge2);
