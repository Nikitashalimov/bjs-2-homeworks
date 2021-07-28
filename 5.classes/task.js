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

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.subject = {};
	}
	setSubject(subjectName) {
		this.subject = subjectName;
	}
	markControl(mark, subjectName) {
		if (1 < mark < 5) {
			this.subject[subjectName] = [mark];
		} else {
			console.log('Ошибка, оценка должна быть числом от 1 до 5')
		}
	}
	addMark(subjectName, ...mark) {
		if (this.subject(subjectName) === undefined) {
			this.subject[subjectName] = [...mark]
		} else {
			this.subject[subjectName] = [...this.subjectName, ...mark]
		}
	}
	getAverageBySubject(subjectName) {
		if (this.subject[subjectName] === undefined) {
			console.log("Несуществующий предмет");
		}
		let sum = this.mark.reduce(function (accumulate, item) {
			return item + accumulate;
		}, 0);
		let avg = Number(sum / this.mark.length);
		return avg;
	}
	getAverage() {

	}
}