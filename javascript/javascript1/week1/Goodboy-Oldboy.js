const dogYearOfBirth = 2017;
const dogYearFuture  = 2027;
var dogYear = dogYearFuture - dogYearOfBirth;
var shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears == true){
    dogYear *= 7;
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);
}
else{
    console.log("Your dog will be " + dogYear + "  human years old in " + dogYearFuture);
    
}
