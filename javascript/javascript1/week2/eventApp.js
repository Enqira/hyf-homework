
var weekDays = ["Sunday","Monday","tuesday","Wednesday ","Thursday","Friday","Saturday"];

function getEventWeekday(daysLeft) {
    
    var eventDate = new Date()
    eventDate.setDate(new Date().getDate() + daysLeft)
    var eventDayNum = eventDate.getDay()
    eventDay = weekDays[eventDayNum]
    return eventDay
}

console.log(getEventWeekday(4))