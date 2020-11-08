
const class07Students = ["mo", "mmm"];
function addStudentToClass(studentName) {
let countedNumberOfStudents = getNumberOfStudents();
if (studentName === "") {
console.log('you cannot add nobody')
} else if (class07Students.includes(studentName)) {
console.log("already included");
} else if (studentName === "Queen") {
class07Students.push(studentName);
} else if (countedNumberOfStudents >= 6) {
console.log("array full");
} else {
class07Students.push(studentName);
console.log("student added");
}
}

function getNumberOfStudents() {
const nrOfStudents = class07Students.length;
console.log("The number of students is " + nrOfStudents + ".");
return nrOfStudents;
}



