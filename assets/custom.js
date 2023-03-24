function menuBtn(e) {
    $('.panel').addClass('on');
    // $('.header').removeClass('header--white');
    // $('.header').addClass('header--black');
    $('body').css({
        'overflow' : 'hidden'
    });
}

function menuCloseBtn(e) {
    $('.panel').removeClass('on');
    // $('.header').addClass('header--white');
    // $('.header').removeClass('header--black');
    $('body').css({
        'overflow' : 'visible'
    });
    $('.m-depth-wrap').hide();
    $('.m-nav-title').removeClass('on');
}

function setSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('load', () => {
    setSize();
});
function depthBtn(e) {
    if (e == 'shop') {
        document.querySelector('.header__2depth').classList.add('on');
        document.querySelector('.header__2depth--explore').classList.remove('on');
        document.querySelector('.header__2depth--shop').classList.add('on');
        // document.querySelector('.header__inline-menu').classList.add('chk');
        // document.querySelector('.header-util').classList.add('chk');
    } else if (e == 'explore') {
        document.querySelector('.header__2depth').classList.add('on');
        document.querySelector('.header__2depth--shop').classList.remove('on');
        document.querySelector('.header__2depth--explore').classList.add('on');
    }
}

$('.depth-btn--shop span').hover(function (){
    $('header').addClass('open');
    $('.header__inline-menu').addClass('on');
    $('.header__2depth--shop').addClass('on');
    $('.header__2depth--explore').removeClass('on');
    $('.header__2depth').addClass('on');
});

$('.depth-btn--explore span').hover(function (){
    $('header').addClass('open');
    $('.header__inline-menu').addClass('on');
    $('.header__2depth--explore').addClass('on');
    $('.header__2depth--shop').removeClass('on');
    $('.header__2depth').addClass('on');
});

$('header').mouseleave(function(){
    $('.header__inline-menu').removeClass('on');
    $('.header__2depth--shop').removeClass('on');
    // $('.header__2depth').slideUp(200);
    $('.header__2depth').removeClass('on');
    // setTimeout(function () {
        $('header').removeClass('open');
    // }, 190);
});

$('.m-nav-title').on('click', function () {
    if (!$(this).hasClass('on')) {
        $('.m-nav-title').removeClass('on');
        $('.m-depth-wrap').slideUp();
        $(this).addClass('on');
        $(this).siblings('.m-depth-wrap').slideDown();
    } else {
        $(this).removeClass('on');
        $(this).siblings('.m-depth-wrap').slideUp();
    }
});