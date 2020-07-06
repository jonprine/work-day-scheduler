// variables

var currentDate = moment().format("dddd, MMMM Do");
var currentTime = moment().format("H");

// time slot variables
var time9 = document.getElementById("hour9");
var time10 = document.getElementById("hour10");
var time11 = document.getElementById("hour11");
var time12 = document.getElementById("hour12");
var time1 = document.getElementById("hour1");
var time2 = document.getElementById("hour2");
var time3 = document.getElementById("hour3");
var time4 = document.getElementById("hour4");
var time5 = document.getElementById("hour5");

//create an array out of number of hours in work day
var workHours = [9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17];
//console.log(hours[4]);

// create an array to represent each time slot
var timeSlot = [hour9,
    hour10,
    hour11,
    hour12,
    hour1,
    hour2,
    hour3,
    hour4,
    hour5];
// console.log(timeSlot[4]);

// find where hour is in moment array
// console.log(moment().toArray());

// grabs hour[3] from moment function
currentTime = moment().toArray();

// loop to compare current time to the timeslot to add class for color
for (var i = 0; i < workHours.length; i++) {
    if (workHours[i] > currentTime[3]) {
        $(timeSlot[i]).addClass("future");
    }
    else if (workHours[i] == currentTime[3]) {
        $(timeSlot[i]).addClass("present");

    }
    else {
        $(timeSlot[i]).addClass("past");
    }
};
//console.log(currentTime[0]);

//console.log(saveButton);

//

$("document").ready(function () {

    // set current date

    $("#currentDay").text(currentDate);


})

// create variable to hold input from text area
// not working
//var list = JSON.parse(localStorage.getItem(".description"))

/*function renderTodos(list) {
    $(".description")
}

// 

// create a function to save info in textarea
// when clicked on save button
$("#saveBtn").on("click", function() {
    event.preventDefault();

    var toDoTask = $(".description")
    .val();

    list.push(toDoTask);

    renderTodos(list);

    localStorage.setItem("todolist", JSON.stringify(list));
})*/

// another attmept 

/*
$(".description").val()

$("saveBtn").click(function() {
    var toDo = $(this); 
    var storage = toDo.attr(".description"); 
    toDo.fadeOut(); 
    localStorage.setItem("local", storage); 
  });

  $(function() {  
    var value = localStorage.getItem("local"); 
    if (value) {  
      $(".description" + value).fadeOut();  
    }
  }); */

  