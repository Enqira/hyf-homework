
var weekDays = ["Sunday","Monday","tuesday","Wednesday ","Thursday","Friday","Saturday"];

function getEventWeekday(daysLeft) {
    
    let eventDate = new Date()
    eventDate.setDate(new Date().getDate() + daysLeft)
    const eventDayNum = eventDate.getDay()
    eventDay = weekDays[eventDayNum]
    return eventDay
}

console.log(getEventWeekday(4))