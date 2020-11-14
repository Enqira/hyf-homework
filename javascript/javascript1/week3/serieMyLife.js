const seriesDurations = [
  {
    title: "Money Heist",
    days: 1,
    hours: 12,
    minutes: 10,
  },
  {
    title: "The Big Bang Theory",
    days: 4,
    hours: 5,
    minutes: 56,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
// function logOutSeriesText
function logOutSeriesText(age) {
    let total = 0
     // my age in minutes
    const myAge = (age*525600) //525600 is the minutes contained in one year

    for (let i=0; i<seriesDurations.length; i++){
        // get duraction of each serie in minutes
        const serieTotalMinutes = (seriesDurations[i].days*1440) + (seriesDurations[i].hours*60) + (seriesDurations[i].minutes)
        // calculate percentage
        const percentage = (serieTotalMinutes/myAge) * 100
        total += percentage
        console.log(seriesDurations[i].title + " took " + percentage.toFixed(3) + "% of my life")

    }
    console.log("In total that is " + total.toFixed(3) + " of my life");
}


logOutSeriesText(80) //type your age here


