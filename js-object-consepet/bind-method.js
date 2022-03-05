const kibria = {
	id: 101,
	name: 'Golam kibria',
	money: 5000,
	treatDey: function (expense) {
		this.money = this.money - expense;
		console.log(this);
		return this.money;
	}
}
const Alom = {
	id: 102,
	name: 'Hero Alom',
	money: 7000,
}
const Golam = {
	id: 103,
	name: 'Golam Robbani',
	money: 8000,
}
kibria.treatDey(500);
const heroTreadDey = kibria.treatDey.bind(Alom);
const golamTreaDey = kibria.treatDey.bind(Golam);
heroTreadDey(5000);
golamTreaDey(5000);



