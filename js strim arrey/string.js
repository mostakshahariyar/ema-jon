const products = [
	'Dell i29 laptop',
	'iphone 1TB phone',
	'yellow phone ',
	'htc phone',
	'lg laptop',
	'red color phone and laptop',
]
// const serching = 'laptop';

// indexOf 

const output = [];
for (const product of products) {
	if (product.indexOf('laptop') != -1) {
		output.push(products);

	}

}
console.log(output);