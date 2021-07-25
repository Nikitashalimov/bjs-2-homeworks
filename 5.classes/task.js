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
	set upgradeState(state) {
		if (this.state < 0) {
			this._state = 0;
		} else if (this.state > 100) {
			this._state = 100;
		} else {
			this.state = this._state
		}
	}
	get showState() {
		return this._state
	}
}

class Magazine extends PrintEditionItem {
	constructor() {
		super(name, releaseDate, pagesCount, state);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor() {
		super(name, releaseDate, pagesCount, state, author);
		this.type = "book";
		this.author = this.author;
	}
}

class NovelBook extends Book {
	constructor() {
		super(name, releaseDate, pagesCount, state, author);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor() {
		super(name, releaseDate, pagesCount, state, author);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor() {
		super(name, releaseDate, pagesCount, state, author);
		this.type = "detective";
	}
}


// Задача 2

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (state > 30) {
			this.book.push(...book);
		}
	}
	findBookBy(type, value) {
		let book = null;
		for (const item of this.books) {
			if (item(type) === value) {
				book = item;
			}
		}
		return book;
	}
	giveBookByName(bookName) {
		for (let i = 0, i < this.books.length, i++) {
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

