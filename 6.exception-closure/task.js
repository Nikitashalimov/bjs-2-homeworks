// Задача 1

const parseCount = (a) => {
	if (Number.parseInt(a) === NaN) {
		const numberError = new Error("Невалидное значение");
		throw numberError;
	}
	return Number.parseInt(a);
}

const validateCount = (a) => {
	try {
		parseCount(a);
	}
	catch (error) {
		console.log('Произошла ошибка')
	}
}

// Задача 2

class Triangle {
	constructor(a, b, c) {
		if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
			const sideError = new Error("Треугольник с такими сторонами не существует");
			throw sideError;
		} else {
			this.a = a;
			this.b = b;
			this.c = c;
		}
	};
	getPerimeter() {
		let P = this.a + this.b + this.c;
		return P;
	}
	getArea() {
		let p = ((this.a + this.b + this.c) / 2);
		let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
		return S.toFixed(3);
	}
}

const getTriangle = (a, b, c) => {
	try {
		return new Triangle(a, b, c);
	}
	catch (error) {
		const errorTriangle = {
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			},
			getArea() {
				return "Ошибка! Треугольник не существует";
			}
		}
		return errorTriangle;
	}
}

