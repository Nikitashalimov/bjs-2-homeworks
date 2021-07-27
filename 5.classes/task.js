// Задача 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5;
	}
	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value
		}
	}
	get state() {
		return this._state
	}
}

class Magazine extends PrintEditionItem {
	type = "magazine";
}

class Book extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, author) {
		super(name, releaseDate, pagesCount, state, author);
		this.author = this.author;
	}
	type = "book";
}

class NovelBook extends Book {
	type = "novel";
}

class FantasticBook extends Book {
	type = "fantastic";
}

class DetectiveBook extends Book {
	type = "detective";
}


// Задача 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		let book = null;
		for (const item of this.books) {
			if (item[type] === value) {
				book = item;
			}
		}
		return book;
	}
	giveBookByName(bookName) {
		let book = null;
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				book = this.books.splice(i, 1);
				return book[i];
			}
		}
		return book;
	}
}


// Задача 3

function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}


// Прошлый код

function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

let student1 = new Student("Vova", 'male', 28);
let student2 = new Student("Alina", "female", 21);
let student3 = new Student("Petya", "male", 24);

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
	console.log(student1.subject);
};

Student.prototype.addMark = function (mark) {
	if (this.marks === undefined) {
		this.marks = [mark];
	} else {
		this.marks.push(mark);
	}
}

Student.prototype.addMarks = function (...mark) {
	if (this.marks === undefined) {
		this.marks = [...mark];
	} else {
		this.marks.push(...mark);
	}
}

Student.prototype.getAverage = function () {
	let sum = this.marks.reduce(function (accumulate, item) {
		return item + accumulate;
	}, 0);
	let avg = Number(sum / this.marks.length);
	return avg;
}

Student.prototype.exclude = function (reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}