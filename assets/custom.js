function menuBtn(e) {
    $('.panel').addClass('on');
    $('.header').addClass('panel-open');
    $('body').css({
        'overflow' : 'hidden'
    });
}

function menuCloseBtn(e) {
    $('.panel').removeClass('on');
    $('.header').removeClass('panel-open');
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

window.addEventListener('resize', () => {
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

$('.depth-btn--shop .d-name').hover(function (){
    $('header').addClass('open');
    $('.header__inline-menu').addClass('on');
    $('.header__2depth--shop').addClass('on');
    $('.header__2depth--explore').removeClass('on');
    $('.header__2depth').addClass('on');

    $('.list-menu--inline li').addClass('off');
    $('.list-menu--inline li').removeClass('active');
    $(this).parent().parent().addClass('active');
    $(this).parent().parent().removeClass('off');

    $('.header__2depth-col li').removeClass('off active');

    $('.header-util').addClass('off');
});

$('.depth-btn--explore .d-name').hover(function (){
    $('header').addClass('open');
    $('.header__inline-menu').addClass('on');
    $('.header__2depth--explore').addClass('on');
    $('.header__2depth--shop').removeClass('on');
    $('.header__2depth').addClass('on');

    $('.list-menu--inline li').addClass('off');
    $('.list-menu--inline li').removeClass('active');
    $(this).parent().parent().addClass('active');
    $(this).parent().parent().removeClass('off');

    $('.header__2depth-col li').removeClass('off active');

    $('.header-util').addClass('off');
});

$('header').mouseleave(function(){
    $('.header__inline-menu').removeClass('on');
    $('.header__2depth--shop').removeClass('on');
    $('.header__2depth').removeClass('on');
    $('header').removeClass('open');

    $('.list-menu--inline li').removeClass('off active');

    $('.header-util').removeClass('off');
});

$('.header__2depth-col li a').hover(function (){
    $('.header__2depth-col li').addClass('off');
    $('.header__2depth-col li').removeClass('active');
    $(this).parent().addClass('active');
    $(this).parent().removeClass('off');
}, function (){
    $('.header__2depth-col li').removeClass('off active')
});

$('.modal__toggle-open').hover(function (){
    $('.list-menu--inline li').removeClass('off active');
    $('.header-util').removeClass('off');

    $('.header__inline-menu').removeClass('on');
    $('.header__2depth--shop').removeClass('on');
    $('.header__2depth').removeClass('on');
    $('header').removeClass('open');
});

$('.header-util a').hover(function (){
    $('.list-menu--inline li').removeClass('off active');
    $('.header-util').removeClass('off');

    $('.header__inline-menu').removeClass('on');
    $('.header__2depth--shop').removeClass('on');
    $('.header__2depth').removeClass('on');
    $('header').removeClass('open');
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

$('.desc-label').on('click', function () {
    if (!$(this).hasClass('on')) {
        $('.desc-label').removeClass('on');
        $('.desc-cont').slideUp();
        $(this).addClass('on');
        $(this).siblings('.desc-cont').slideDown(200);
    } else {
        $(this).removeClass('on');
        $(this).siblings('.desc-cont').slideUp(200);
    }
});

// $('.switch-btn').on('click', function(){
//     $(this).toggleClass('on');
//     if($(this).hasClass('on')){
//         $(this).text('1');
//         $('#product-grid').addClass('grid--2');
//     }else{
//         $(this).text('2');
//         $('#product-grid').removeClass('grid--2');
//     }
// });

$(document).ready(function(){
    // 새로고침 후 상태 복원
    if(localStorage.getItem('toggleState') === 'on'){
        $('.switch-btn').addClass('on').text('1');
        $('#product-grid').addClass('grid--2');
    } else {
        $('.switch-btn').removeClass('on').text('2');
        $('#product-grid').removeClass('grid--2');
    }

    // 버튼 클릭 이벤트 핸들러
    $('.switch-btn').on('click', function(){
        $(this).toggleClass('on');

        if($(this).hasClass('on')){
            $(this).text('1');
            $('#product-grid').addClass('grid--2');
            localStorage.setItem('toggleState', 'on'); // 상태 저장
        }else{
            $(this).text('2');
            $('#product-grid').removeClass('grid--2');
            localStorage.setItem('toggleState', 'off'); // 상태 저장
        }
    });
});

// $('.product-visual').on('click', function(){
//     let thisImg = $(this).find('img').attr('src');
//     console.log(thisImg);
//     $("body").prepend(`<img class="testImg" src='${thisImg}'>`);
// });
//
// $('.testImg').on('click', function(){
//     $(this).hide();
// });

$('.header__search').on('click', function (){
    $(this).toggleClass('on');
    if($(this).hasClass('on')){
        $('.header-util').css({
            'z-index' : '-1'
        });
    }else{
        $('.header-util').css({
            'z-index' : '2'
        });
    }
});


function facetClose(e){
    document.querySelector('#facet-wrap').classList.add('off');
}