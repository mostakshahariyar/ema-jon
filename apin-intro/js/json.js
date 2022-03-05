//json 
//  json ta ki ?
// json is a javaScript Object Notation.
const data = { id: 27, name: 'mostak', subject: 'API' };
const strigfight = JSON.stringify(data);
// console.log(strigfight);
// console.log(user)
const converted = JSON.parse(strigfight);
console.log(converted);