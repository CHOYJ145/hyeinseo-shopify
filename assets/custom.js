function menuBtn(e) {
    document.querySelector('.header__inline-menu').classList.toggle('on');
    document.querySelector('.header-util').classList.toggle('on');
    if (document.querySelector('.header__inline-menu').classList.contains('on')) {
        document.querySelector('.menu-btn--mo span').innerText = 'Close';
        // document.querySelector('header').classList.remove('header--white');
    } else {
        document.querySelector('.menu-btn--mo span').innerText = 'Menu';
        document.querySelector('.header__2depth').classList.remove('on');
        document.querySelector('.header__2depth--shop').classList.remove('on');
        document.querySelector('.header__2depth--explore').classList.remove('on');
        // document.querySelector('header').classList.add('header--white');
    }
}

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
    $('.header__2depth').slideDown(300);
});

$('.depth-btn--explore span').hover(function (){
    $('header').addClass('open');
    $('.header__inline-menu').addClass('on');
    $('.header__2depth--explore').addClass('on');
    $('.header__2depth--shop').removeClass('on');
    $('.header__2depth').slideDown(300);
});

$('header').mouseleave(function(){
    $('.header__inline-menu').removeClass('on');
    $('.header__2depth--shop').removeClass('on');
    $('.header__2depth').slideUp(300);
    setTimeout(function () {
        $('header').removeClass('open');
    }, 300);
});