const class07Students = ["mo", "mmm"];
function addStudentToClass(studentName) {
    let countedNumberOfStudents = getNumberOfStudents()
    if (studentName == ""){
        return "empty array"
    } 
    
    else if ( studentName == "Queen"){
        class07Students.push(studentName)
        return
    }
    else if ( class07Students.includes(studentName)){
        return "already included"
    }
    else if (countedNumberOfStudents > 5){
        return "array full"
    }
    
    else{
        class07Students.push(studentName)
        return "student added"
    }
}

function getNumberOfStudents() {
  var nrOfStudents 
  nrOfStudents = class07Students.length
  console.log("The number of students is " + nrOfStudents  + ".")
  return nrOfStudents
}
console.log(addStudentToClass("Enqira")) 



