// display today's day and date 
var currentDay = moment().format('dddd, MMM Do YYYY LT');
    $("#currentDay").append(currentDay);


$(".saveBtn").on("click", function () {

    // get the nearby values 
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    
    // ave in local storage
    localStorage.setItem(time, text);
    console.log(text);
});


function hour(){
// current number of hours
var currentHour = moment().hours();

$('.time-block').each(function(){

    var rowHour = parseInt($(this).attr('id'))

    // to check current hour vs. the rows hour
    if(rowHour < currentHour){
        $(this).addClass('past');
    }else if(rowHour === currentHour){
        $(this).removeClass('past');
        $(this).addClass('present');
    }else{
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
})

}

hour();

$('#7 .description').val(localStorage.getItem('7'));
$('#8 .description').val(localStorage.getItem('8'));
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16')); 