function openMenu() {
    let menuMobile = document.querySelector('#mobile-menu');

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        menuMobile.style.display = 'none'
        document.getElementById('img').src = "Imagens/menu-icon.svg"
    } else {
        menuMobile.classList.add('open')
        menuMobile.style.display = 'block'
        document.getElementById('img').src = "Imagens/close.svg"
    }
}