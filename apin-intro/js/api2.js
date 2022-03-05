function loadUsers() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => loadPosts(data))
};
function loadPosts(post) {
	console.log(post)
}
