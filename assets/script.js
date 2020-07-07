$("document").ready(function () {

    // set current date

    $("#currentDay").text(currentDate);

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

    function hourUpdater() {

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

    }

    // listen for save button clicks
    $(".saveBtn").on("click", function () {
        // get nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save in local storage
        localStorage.setItem(time, value);
    });

    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater(), 15000);

    // load any saved data from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));




})


