import { menuArray } from "./data.js";

let cartItemsCount = 0

document.addEventListener('click', (e) => {
    if (e.target.dataset.add)
        handleAddBtn(parseInt(e.target.dataset.add))
    else if (e.target.dataset.remove)
        handleRmBtn(parseInt(e.target.dataset.remove))
})

const handleAddBtn = (itemId) => {
    const addItem = menuArray.filter(item => {
        return item.id === itemId
    })[0]
    addItem.isAdded = !addItem.isAdded
    cartItemsCount++
    render()
}

const handleRmBtn = (itemId) => {
    const rmItem = menuArray.filter(item => {
        return item.id === itemId
    })[0]
    rmItem.isAdded = !rmItem.isAdded
    cartItemsCount--
    render()
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
    if (cartItemsCount === 0)
        return ``
    let cartHtml = `<h2 id="your-order">Your order</h2>`
    let totalPrice = 0
    menuArray.forEach(item => {
        if (item.isAdded) {
            cartHtml += `
                <div class="cart-item">
                    <h2>${item.name}</h1>
                    <button class="rm-btn" data-remove="${item.id}">remove</button>
                    <h3 class="align-right">$${item.price}</h3>
                </div>`
            totalPrice += item.price
        }
    })
    cartHtml += `
        <div id="total-price">
            <h2>Total Price</h1>
            <h3 class="align-right">$${totalPrice}</h3>
        </div>
        <button class="purchase-btn">Complete order</button>`
    return cartHtml
}

const getCheckoutHtml = () => {
    return `
        <h2>Enter card details</h2>
        <form class="checkout-form" id="checkout-form">
            <input type="text" name="name" placeholder="Enter your name"/>
            <input type="text" name="name" placeholder="Enter your name"/>
            <input type="text" name="name" placeholder="Enter your name"/>
        </form>
        <button class="pay-btn">Pay</button>`
}

const render = () => {
    document.getElementById('menu').innerHTML = getMenuHtml()
    document.getElementById('cart').innerHTML = getCartHtml()
    document.getElementById('modal').innerHTML = getCheckoutHtml()
}

render()