$(document).ready(function () {
    var start_date = new Date($('.timeline ol li:first-child').data('date'));
    var estimated_end_date = new Date($('.timeline ol li:last-child').data('date'));

    $('.timeline ol li').each(function () {
        var currentDate = new Date($(this).data('date'));
        var percnt = ((currentDate - start_date) / (estimated_end_date - start_date) ) *100;
        $(this).css('left', percnt+'%');
    });

    var currentDate = new Date($('.timeline ol li.current').data('date'));
    var percnt = ((currentDate - start_date) / (estimated_end_date - start_date) ) *100;
    $('#progress-line').animate({width: percnt+'%'}, 3000);
});