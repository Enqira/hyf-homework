const travelInformation = {
  speed: 50,
  destinationDistance: 432
};

function getSpeed() {
    const time = travelInformation.destinationDistance /travelInformation.speed
    const travelHours = Math.floor(time)
    const travelMinutes = (time - travelHours)*60
    const rTravelMinutes = Math.round(travelMinutes)
    return travelHours + " hours and " + rTravelMinutes + " minutes."
}

const travelTime = getSpeed(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes
