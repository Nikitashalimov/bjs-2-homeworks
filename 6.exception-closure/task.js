// Задача 1

const parseCount = (a) => {
	if (isNaN(Number.parseInt(a))) {
		throw new Error("Невалидное значение");
	}
	return Number.parseInt(a);
}

const validateCount = (a) => {
	try {
		return parseCount(a);
	}
	catch (Error) {
		return Error;
	}
}

// Задача 2

class Triangle {
	constructor(a, b, c) {
		if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
	getPerimeter() {
		return (this.a + this.b + this.c);
	}
	getArea() {
		let p = (this.getPerimeter() / 2);
		let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
		return Number(S.toFixed(3));
	}
}

const getTriangle = (a, b, c) => {
	try {
		return new Triangle(a, b, c);
	}
	catch (error) {
		return {
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			},
			getArea() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}


/*
let triangle1 = new Triangle(4, 4, 2);
let triangle2 = new Triangle(8, 8, 4);
let triangle3 = new Triangle(3, 3, 3);

triangle2['c'];
triangle2.getPerimeter();
triangle1.getArea();
getTriangle(4, 4, 2);
*/
