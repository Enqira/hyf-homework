
function getFullname(firsname, surname, useFormalName) {
    if (firsname=="" || surname==""){
        throw "Firtname and surname fields should not be empty"
    }

    if (useFormalName  ){
        return "Lord " + firsname + " " + surname
    }else{
    return firsname + " " + surname  
    }
}
var fullname1 = getFullname("Benjamin", "Hughes", true); // returns "Lord Benjamin Hughes"`
var fullname2 = getFullname("Benjamin", "Hughes", false); // returns "Benjamin Hughes"
console.log(fullname1);
console.log(fullname2);
