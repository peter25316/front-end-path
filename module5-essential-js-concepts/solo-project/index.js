import { menuArray } from "./data.js";

let cartItems = []

document.addEventListener('click', (e) => {
    if (e.target.dataset.add)
        handleAddBtn(parseInt(e.target.dataset.add))
    else if (e.target.dataset.remove)
        handleRmBtn(parseInt(e.target.dataset.remove))
    else if (e.target.id === 'purchase-btn')
        handlePurchaseBtn()
})

document.addEventListener('submit', e => {
    e.preventDefault()
    if (e.target.id === 'checkout-form')
        handlePayBtn()
})

const handleAddBtn = (itemId) => {
    const addItem = menuArray.filter(item => {
        return item.id === itemId
    })[0]
    if (!cartItems.includes(addItem))
        cartItems.splice(itemId, 0, addItem)
    render()
}

const handleRmBtn = (itemId) => {
    cartItems = cartItems.filter(item => {
        return item.id !== itemId
    })
    render()
}

const handlePurchaseBtn = () => {
    document.getElementById('modal').classList.toggle('hidden')
}

const handlePayBtn = () => {
    const checkoutForm = document.getElementById('checkout-form')
    const checkoutFormData = new FormData(checkoutForm)
    const confirmation = document.getElementById('confirmation')

    cartItems = []
    render()
    confirmation.textContent = `Thanks, ${checkoutFormData.get('name')}!Your order is on its way!`
    confirmation.classList.toggle('hidden')
    document.getElementById('modal').classList.toggle('hidden')

    setTimeout(() => {
        confirmation.classList.toggle('hidden')
    }, 1500);

}

const getMenuHtml = () => {
    let menuHtml = ``
    menuArray.forEach(menuItem => {
        menuHtml += `
        <div class="item">
            <img src="${menuItem.image}" alt="${menuItem.name}">
            <div class="item-details">
                <h2>${menuItem.name}</h2>
                <p>${menuItem.ingredients.toString()}</p>
                <h3>$${menuItem.price}</h3>
            </div>
            <button class="add-btn" data-add="${menuItem.id}">+</button>
        </div>`
    })
    return menuHtml
}
const getCartHtml = () => {
    if (cartItems.length === 0)
        return ``
    let cartHtml = `<h2 id="your-order">Your order</h2>`
    let totalPrice = 0
    cartItems.forEach(item => {
        cartHtml += `
            <div class="cart-item">
                <h2>${item.name}</h1>
                <button class="rm-btn" data-remove="${item.id}">remove</button>
                <h3 class="align-right">$${item.price}</h3>
            </div>`
        totalPrice += item.price
    })
    cartHtml += `
        <div id="total-price">
            <h2>Total Price</h1>
            <h3 class="align-right">$${totalPrice}</h3>
        </div>
        <button class="purchase-btn" id="purchase-btn">Complete order</button>`
    return cartHtml
}

const getCheckoutHtml = () => {
    return `
        <h2>Enter card details</h2>
        <form class="checkout-form" id="checkout-form">
            <input type="text" name="name" placeholder="Enter your name" required>
            <input type="number" name="cardNumber" placeholder="Enter card number" required>
            <input type="number" name="CVV" placeholder="Enter CVV" required>
            <button class="pay-btn" id="pay-btn" type="submit">Pay</button>
        </form>`
}

const render = () => {
    document.getElementById('menu').innerHTML = getMenuHtml()
    document.getElementById('checkout').innerHTML = getCartHtml()
    document.getElementById('modal').innerHTML = getCheckoutHtml()
}

render()