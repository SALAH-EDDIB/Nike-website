document.querySelector('.card-btn').addEventListener('click', function () {
    document.querySelector('.cart-container').classList.add('visib')
    document.querySelector('.cart').classList.add('tran')
    document.querySelector('body').style.overflow = 'hidden'



})

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.cart-container').classList.remove('visib')
    document.querySelector('.cart').classList.remove('tran')
    document.querySelector('body').style.overflow = 'auto'

})