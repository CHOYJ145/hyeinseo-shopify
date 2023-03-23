// window.addEventListener('load', () => {
//     document.querySelector('.custom').classList.add('theme-black');
//     document.querySelector('.header').classList.remove('header--black');
//     document.querySelector('.header').classList.add('header--white');
// });

$(document).ready(function(){
    document.querySelector('.custom').classList.add('theme-black');
    document.querySelector('.header').classList.remove('header--black');
    document.querySelector('.header').classList.add('header--white');
});

$('.article-img').hover(function (){
    let thisTitle = $(this).data('title');
    $('.article-title').text(thisTitle);
}, function(){
    $('.article-title').text('');
});