const bottol = { color: 'yellow', hold: 'water', price: 50 }
const keys = Object.keys(bottol);
console.log(keys);
const value = Object.values(bottol);
console.log(value);
const paris = Object.entries(bottol);
console.log(paris);
// Object.seal(bottol);
Object.freeze(bottol)
bottol.price = 500;
bottol.hight = 1;
delete bottol.price;
console.log(bottol);
