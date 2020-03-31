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

let removeBtn = document.querySelectorAll('.remove-item')
let arrowUp = document.querySelectorAll('.fa-chevron-up')
let arrowDown = document.querySelectorAll('.fa-chevron-down')

removeBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let btnClicked = event.target;
        btnClicked.parentElement.parentElement.remove()
        updateTotal()
    })
})

function updateTotal() {

    let cartRow = document.querySelectorAll('.cart-item')

    let total = 0
    cartRow.forEach((cart) => {

        let priceElement = cart.querySelector('h5')
        let price = parseFloat(priceElement.innerHTML.replace('$', ''))
        let quantityElement = cart.querySelector('p')
        let quantity = parseFloat(quantityElement.innerHTML)


        total += price * quantity

        let totalcart = document.querySelector('.cart-total')

        totalcart.innerText = total




    })


}

arrowUp.forEach(btn => {
    btn.addEventListener('click', (event) => {

        let add = event.target.parentElement.querySelector('p')
        let vlu = parseFloat(add.innerText)
        vlu++
        add.innerText = vlu

        updateTotal()


    })
})

arrowDown.forEach(btn => {

    btn.addEventListener('click', (event) => {

        let add = event.target.parentElement.querySelector('p')
        let vlu = parseFloat(add.innerText)
        if (vlu > 1) {
            vlu--
            add.innerText = vlu
            updateTotal()
        }

    })
})


let addButton = document.querySelectorAll('.add-btn')

addButton.forEach(btn => {
    btn.addEventListener('click', addToCard)
})

function addToCard(event) {

    let button = event.target

    button.innerText = 'Added';

    let shopItem = button.parentElement.parentElement

    let title = shopItem.querySelector('h2').innerText

    let price = shopItem.querySelector('span').innerText

    let imageSrc = shopItem.querySelector('img').src

    addCartItem(title, price, imageSrc)

    updateTotal();




}

function addCartItem(title, price, imageSrc) {

    let cartRow = document.createElement('div')
    let cartItems = document.querySelector('.cart-content')
    let cartItemName = cartItems.querySelectorAll('h4')


    for (i = 0; i < cartItemName.length; i++) {
        if (cartItemName[i].innerHTML == title) {
            alert('this item is already added to the cart')
            return
        }
    }




    let cartRowContent = ` <div class="cart-item">
    <img src="${imageSrc}" alt="">
    <div class="item-text">
        <h4>${title}</h4>
        <h5>${price}</h5>
        <span class="remove-item">remove</span>
    </div>
    <div>
        <i class="fas fa-chevron-up"></i>
        <p class="quantity">1</p>
        <i class="fas fa-chevron-down"></i>
    </div>

</div>`

    cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow)

}