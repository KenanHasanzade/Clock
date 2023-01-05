var sec = document.getElementById("sec");
var degree;
var minutedegree;
var minutes = document.getElementById("minute");
var hours = document.getElementById("hour");
var displayplace = document.getElementById("displaytime");
var weekplace = document.getElementById("weekDays");
var d = new Date();
var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();

degree = s * 6;
minutedegree = m * 6;
hourdegree = h * 30 + m / 2;

sec.style.transform = `rotate(${degree}deg)`;
minutes.style.transform = `rotate(${minutedegree}deg)`;
hours.style.transform = `rotate(${hourdegree}deg)`;


function secondsTimer() {
  degree = degree + 6;
  document.getElementById("sec").style.transform = `rotate(${degree}deg)`;
}
setInterval(secondsTimer, 1000);


function minutesTimer() {
  minutedegree = minutedegree + 6;
  document.getElementById(
    "minute"
  ).style.transform = `rotate(${minutedegree}deg)`;
}
setInterval(minutesTimer, 60000);


function hoursTimer() {
  hourdegree = hourdegree + 6;
  document.getElementById("hour").style.transform = `rotate(${hourdegree}deg)`;
}
setInterval(hoursTimer, 360000);

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  if (s < 10) {
    displayplace.innerText = h + ":" + m + ":" + "0" + s;
  } else if (m < 10) {
    displayplace.innerText = h + ":" + "0" + m + ":" + s;
  } else if (s < 10 && m < 10) {
    displayplace.innerText = h + ":" + "0" + m + ":" + "0" + s;
  } else {
    displayplace.innerText = h + ":" + m + ":" + s;
  }
}
setInterval(time, 1000);

function weekday() {
  var d = new Date();
  var week = d.getDay();
  console.log(week);
  switch (week) {
    case 1:
      weekplace.innerText = "Monday";
      break;
    case 2:
      weekplace.innerText = "Tuesday";
      break;
    case 3:
      weekplace.innerText = "Wednesday";
      break;
    case 4:
      weekplace.innerText = "Thursday";
      break;
    case 5:
      weekplace.innerText = "Friday";
      break;
    case 6:
      weekplace.innerText = "Saturday";
      break;
    case 0:
      weekplace.innerText = "Sunday";
  }
}
setInterval(weekday, 1000);
