const anthem = 'amar sonar bangla ami tomay valo basi';
const words = anthem.split(' ');
const withOut = anthem.split('a');

const smallSize = anthem.slice(5, 13)
// console.log(smallSize);


// substr

const anotherParth = anthem.substr(5, 7);
// console.log(anotherParth);
const onePath = anthem.substring(11, 15);
// console.log(onePath);

//concat 

const firt = 'amader';
const second = ' city';
// const full = firt + second;
const full = firt.concat(second);
// console.log(full);

const words2 = ['m', 'o', 's', 't', 'a', 'k'];
// const allJoined = words2.join('');
const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
// const allJoined = words2.join(' ');
console.log(allJoined);














