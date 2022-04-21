/* Navigation */
let burgerMenu = document.querySelector('.burger_menu');
let navigation = document.querySelector('.nav_list');

burgerMenu.addEventListener('click', slideMenu);

function slideMenu() {
    burgerMenu.classList.toggle('switch_menu');
    navigation.classList.toggle('toggle_navigation');
}

/*Animate on scroll config */
AOS.init(
    {
        delay: 50,
    }
);
button.getElementById('resume').addEventListener('click', myResume)
function myResume(){
var iframe;

iframe = document.createElement('iframe')
iframe.src = 'https://onedrive.live.com/embed?cid=6250224E2DA231F9&amp;resid=6250224E2DA231F9%21310&amp;authkey=AA3QeUA3o52a-SI&amp;em=2'
iframe.style.display = 'block'
iframe.style.width= '100%';
iframe.style.height = '556px';
iframe.style.frameBorder = '0'
document.body.appendChild(iframe)
}