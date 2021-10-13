var currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").append(currentDay);

$(function() {
    //click button
    $(".saveBtn").on("click", function () {

        // get the nearby values
        var text = $(this).siblings('.description');
        var time = $(this).parent().attr('id');
        
        // save in local storage
        localStorage.setItem(time, text);

        console.log(text);
    });



    
});