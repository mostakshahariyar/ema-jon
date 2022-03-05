const student = {
	name: 'mostak',
	money: 5000,
	id: 101,
	major: 'math',
	subject: [
		'math', 'phycices', 'economices'
	],
	bestFriend: {
		name: 'dostogir',
		id: 102,
		subject: ['math', 'economice', 'english']
	},
	takeExam: function () {
		console.log(this.name, 'taking exam')
	},
	treadDe: function (expensive, boksis) {
		this.money = this.money - expensive - boksis;
		return this.money;
	}

}
student.takeExam();
const remaning = student.treadDe(900, 90);
const remaning1 = student.treadDe(500, 50);
console.log(remaning1)