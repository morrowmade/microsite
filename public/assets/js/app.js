var words = ['hackers', 'doers', 'dreamers', 'inventors', 'builders', 'artists'],
    i = 0;

function finish() {
    $("#cta-switcher").html('innovators')

    $("#cta-switcher").fadeTo(1500, 0.1, function() {
        $(this).removeClass('text-info').addClass('text-warning');    
    }).fadeTo(3300, 1);

    $("#morrowmade-lead").fadeTo(1500, 0.1, function() {
        $(this).removeClass('text-info').addClass('text-warning');    
    }).fadeTo(3300, 1);
    
    $(".logo").fadeTo(1500, 0.1, function() {
        $(this).css('box-shadow', '0px 0px 25px #ffc107').css('border-color', '#ffc107').css('filter', 'sepia()');
    }).fadeTo(3300, 1);
}

function changeWord() {
    if (i == words.length) {
        finish();    
    } else {
        $("#cta-switcher").html(words[i]);
        i++;
        delayChange();
    }
}

function delayChange() {
    setTimeout(function() {
        changeWord();
    }, 1300);
}

setTimeout(function() {
    delayChange();
}, 1000);
