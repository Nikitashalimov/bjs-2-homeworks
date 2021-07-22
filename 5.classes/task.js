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
    this.marks = [mark];
  } else {
    this.marks.push(...mark);
  }
}

Student.prototype.getAverage = function () {
  let sum = marks.reduce(function (accumulate, item) {
    return item + accumulate;
  }, 0);
  return sum;
  let avg = Number((sum / marks.length).toFixed(2));
  console.log(avg);
}

Student.prototype.exclude = function (reason) {
  this.exclude = reason;
  delete this.subject;
  delete this.marks;
}