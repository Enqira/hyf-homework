
function calculateIfhouseIsExpensive (name, wide, deep, hight, gardenSizeInM2, houseCost){
    const volumeInMeters = wide * deep * hight;
    const housePrice = (volumeInMeters * 2.5 * 1000) + (gardenSizeInM2 * 300);
    if (housePrice > houseCost){
        console.log(name + " bougth the house for " + houseCost + ". The calculated value of this house is: " + housePrice + ". It was a good purshase!");
    }
    else{
        console.log(name + " bougth the house for " + houseCost + ". The calculated value of this house is: " + housePrice + ". It was a bad purshase!");
    }
}
calculateIfhouseIsExpensive("Peter", 8, 10, 10, 100, 2500000);
calculateIfhouseIsExpensive("Julia", 5, 11, 8, 70, 1000000);