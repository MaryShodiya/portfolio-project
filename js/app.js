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
iframe.src = 'https://acrobat.adobe.com/link/review/?x_api_client_id=adobe_com&x_api_client_location=add_comment&token_type=bearer&expires_in=86399&uri=urn%3Aaaid%3Ascds%3AUS%3Az_e6mevlTYO51CnPpsnpjA'
iframe.style.display = 'block'
iframe.style.width= '100%';
iframe.style.height = '556px';
iframe.style.frameBorder = '0'
document.body.appendChild(iframe)
}