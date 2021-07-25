// Задача 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	}
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

class Magazine extends PrintEditionItem {
	constructor() {
		super(name);
		super(releaseDate);
		super(pagesCount);
		super(state);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor() {
		super(name);
		super(releaseDate);
		super(pagesCount);
		super(state);
		this.type = "book";
		this.author = this.author;
	}
}

class NovelBook extends Book {
	constructor() {
		super(name);
		super(releaseDate);
		super(pagesCount);
		super(state);
		super(author);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor() {
		super(name);
		super(releaseDate);
		super(pagesCount);
		super(state);
		super(author);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor() {
		super(name);
		super(releaseDate);
		super(pagesCount);
		super(state);
		super(author);
		this.type = "detective";
	}
}


// Задача 2

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}
}

addBook(book) {
	if (state > 30) {
		this.book.push(...book);
	}
}

findBookBy(type, value) {

}