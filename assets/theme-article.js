$('.credit-button').on('click', function (){
    $('.credit-desc').addClass('on');
    $('body').css({
        'overflow' : 'hidden'
    });
    $('body').append('<div class="credit-dim"> </div>');
});

$('.credit-close-btn').on('click', function (){
    $('.credit-desc').removeClass('on');
    $('body').css({
        'overflow' : 'visible'
    });
    $('.credit-dim').remove();
});