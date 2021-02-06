//var name = "jack";
//var age = 23;
//var message = "Hi, my name is " + name + " and i am " + age + " years old";
//
//var students = ["Timmy","Jannesa","Arun"];
//var naughtyList = [];
//naughtyList.push(students[0]);
//var index = naughtyList.indexOf("Timmy");
//console.log(index);
//naughtyList = naughtyList.splice(index, 1);
//console.log(naughtyList);
//
//var student = {
//    firstname: "John",
//    lastname: "Parker",
//    age: 7
//};
var students = [];
function giveStudentInfo(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hello = function() {
        return "hi, i am " + this.firstName + " and i am new here";
    };
}

var student1 = new
giveStudentInfo("Jenny","Arowogba",15);
console.log(student1.firstName);
console.log(student1.hello())

students.push(new giveStudentInfo("Ademide", "Ayoakin", 18));

students.push(student1);

for (var i = 0; i < students.length; i++) {
console.log(students[i]);
    }
console.log("got here");
var student = students[0];
for (var key in student) {
    console.log(student[key]);
}