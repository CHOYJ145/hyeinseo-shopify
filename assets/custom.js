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