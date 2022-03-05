function loadData() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => console.log(data))
}
function loadPosts() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => post(data))
}
function post(post) {
	const ul = document.getElementById('users')
	for (const user of post) {
		// console.log(user.name);
		const li = document.createElement('li')
		li.innerText = `name: ${user.name} email: ${user.email}`
		ul.appendChild(li)
	}
}

