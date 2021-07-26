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
	constructor(name, books) {
		this.name = "";
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
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				book = this.books.splice(i, 1);
				return book[i];
			} else {
				return null;
			}
		}
	}
}

// Задача 3

