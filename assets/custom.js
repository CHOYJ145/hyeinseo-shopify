function menuBtn(e){
   document.querySelector('.header__inline-menu').classList.toggle('on');
     document.querySelector('.header-util').classList.toggle('on');
  if(document.querySelector('.header__inline-menu').classList.contains('on')){
    document.querySelector('.menu-btn--mo span').innerText = 'Close';
  }else{
    document.querySelector('.menu-btn--mo span').innerText = 'Menu';
  }
}

function depthBtn(e){
  document.querySelector('.header__2depth').classList.toggle('on');
  document.querySelector('.header__inline-menu').classList.toggle('chk');
  document.querySelector('.header-util').classList.toggle('chk');
}