var Person = function(name, yearOfbirth, job) {
    this.name = name;
    this.yearOfbirth = yearOfbirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfbirth);
    
}

var john = new Person("john", 1990, "teacher");
var jane = new Person("jane", 1995, "designer");
var Mark = new Person("jane", 1960, "retired");

john.calculateAge();
jane.calculateAge();
Mark.calculateAge();
