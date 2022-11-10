const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click',() => {
    nav.classList.toggle('open-menu')
    if (btn.innerHTML === 'メニュー') {
        btn.innerHTML = '閉じる';
    } 
    else {
        btn.innerHTML = 'メニュー';
    }
});