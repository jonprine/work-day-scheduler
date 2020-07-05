$("document").ready(function() {

    // set current date

    var currentDate = moment().format("dddd, MMMM Do");

    $("#currentDay").text(currentDate);

    // set current hour
    var currentTime = moment().format("H");
    console.log(currentTime);




})