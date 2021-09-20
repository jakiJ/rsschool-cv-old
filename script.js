const burgerMenu = document.querySelector('.burger-menu')
const burgerIcon = document.querySelector('.img-burger')
const closeIcon = document.querySelector('.img-close')
const itemMenu = document.querySelectorAll('.item-burg')

burgerIcon.addEventListener('click', () => {
    burgerIcon.style.display = 'none'
    burgerMenu.style.display = 'block'
    closeIcon.style.display = 'block'
})

closeIcon.addEventListener('click', () => {
    burgerIcon.style.display = 'block'
    burgerMenu.style.display = 'none'
    closeIcon.style.display = 'none'
})

itemMenu.forEach(item => {
    item.addEventListener('click', () => {
        burgerIcon.style.display = 'block'
        burgerMenu.style.display = 'none'
        closeIcon.style.display = 'none'
    })
})