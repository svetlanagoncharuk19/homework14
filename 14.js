function Student(name, surname, birthyear) {
    this.name = name;

    this.surname = surname;

    this.birthyear = birthyear;

    this.lessons = Array(30).fill('');

    this.marks = Array(30).fill('');

    this.getAge = function() {
        const age = new Date().getFullYear() - this.birthyear;
        return age;
    };

    this.present = function() {
        const lesson = this.lessons.findIndex(item => item == '');
        this.lessons[lesson] = 1;

        return this.lessons;
    };

   this.absent = function() {
        const lesson = this.lessons.findIndex(item => item == '');
        this.lessons[lesson] = 0;

        return this.lessons;
    };

    this.mark = function(value) {
        const element = this.marks.findIndex(item => item == '');
        this.marks[element] = value;

        return this.marks;
    };

    this.getAverageMark = function() {
        const sum = this.marks.reduce(function(sum, elem) {
            return sum + elem;
        });

        const average = sum / this.marks.length;

        return average;
    };

    this.getAverageAttendance = function() {
        const sum = this.lessons.reduce(function(sum, elem) {
            return sum + elem;
        });

        const average = sum / this.lessons.length;

        return average;
    };

    this.summary = function() {
        if (this.getAverageMark() > 9 && this.getAverageAttendance() > 0.9) {
            return 'good job!';
        } else if (this.getAverageMark() < 9 && this.getAverageAttendance() < 0.9) {
            return 'fail';
        } else {
            return 'you can do better';
        } 
    };
}

let petrov = new Student ('Igor', 'Petrov', 1990);

console.log(petrov);

console.log(petrov.getAge());

console.log(petrov.present());
console.log(petrov.absent());

console.log(petrov.mark(10));
console.log(petrov.mark(10));
console.log(petrov.mark(9));
console.log(petrov.mark(2));
console.log(petrov.mark(0));
console.log(petrov.mark(10));

console.log(petrov.summary());