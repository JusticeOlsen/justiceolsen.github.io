//Toggle menu function start
function toggle_menu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");  
}
//Toggle menu function end

//Date in footer start
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("current_date").textContent = fulldate;
//Date in footer end

//Announcement start

if ( d.getDay() == 5) {
    document.getElementById("announcement").innerHTML = "Saturday = Preston Pancakes in the Park!</br>9:00 a.m. Saturday at city park.";
}
else {
    document.getElementById("announcement").style.display = "none";

}
//Announcment end