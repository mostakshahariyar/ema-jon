const bottol = {
	color: 'yellow',
	hold: 'water',
	price: 50
};
/*
for (let i = 0; i<10; i++){

}
for(const num of number){

} array
for(const prop in students){

} object


*/
const keys = Object.keys(bottol);
for (const prop in bottol) {
	console.log(bottol[prop])
};
const entries = Object.entries(bottol);