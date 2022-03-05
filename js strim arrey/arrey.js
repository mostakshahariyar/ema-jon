function megaFriend(friends) {
	let mega = friends[0];
	for (const friend of friends) {
		if (friend.length > mega.length) {
			maga = friend;
		}
	}
	return mega;
}
const friends = ['mostak', 'maruf', 'dostogir', 'other']
const myBigBardy = megaFriend(friends);
console.log(myBigBardy)