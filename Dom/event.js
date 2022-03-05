function makeRed() {
	document.body.style.backgroundColor = 'blue';
}
function makeBlue() {
	document.body.style.backgroundColor = 'red';
}
// redButton 
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;
// greenButton
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
	document.body.style.backgroundColor = 'green';
}
// goldenrod button 

const goldenrod = document.getElementById('make-goldenrod-button');
goldenrod.addEventListener('click', function makegoldenrod() {
	document.body.style.backgroundColor = 'goldenrod';
})

// hotpink button 

document.getElementById('make-hotpink-button').addEventListener('click', function makehotpink() {
	document.body.style.backgroundColor = 'hotpink';
})

