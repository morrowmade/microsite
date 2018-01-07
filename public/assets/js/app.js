function finish() {
    $("#cta-switcher").html('innovators')

    $("#cta-switcher").fadeTo(1500, 0.1, function() {
        $(this).removeClass('text-info').addClass('text-warning');    
    }).fadeTo(3300, 1);

    $("#morrowmade-lead").fadeTo(1500, 0.1, function() {
        $(this).removeClass('text-info').addClass('text-warning');    
    }).fadeTo(2500, 1);
    
    $(".logo").fadeTo(1500, 0.1, function() {
        $(this).css('box-shadow', '0px 0px 25px #ffc107').css('border-color', '#ffc107').css('filter', 'sepia()');
    }).fadeTo(2500, 1);
}

$(function(){

    $("#cta-switcher").typed({
        strings: ['makers', 'art', 'artists', 'hackers', 'innovators'],
        typeSpeed: 100,
        backSpeed: 50,
        callback : function () {
            finish()
        }
    });

});
