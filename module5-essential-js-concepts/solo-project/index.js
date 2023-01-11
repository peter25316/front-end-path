import { menuArray } from "./data.js";

const getMenuHtml = (menuArray) => {
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
            <button class="add-btn">+</button>
        </div>`
    })
    return menuHtml
}
const getCartHtml = () => {
    let cartHtml = `<h2 id="your-order">Your order</h2>`
    let totalPrice = 0
    menuArray.forEach(item => {
        cartHtml += `
            <div class="cart-item">
                <h2>${item.name}</h1>
                <button class="rm-btn">remove</button>
                <h3 class="align-right">$${item.price}</h3>
            </div>`
        totalPrice += item.price
    })
    cartHtml += `
        <div id="total-price">
            <h2>Total Price</h1>
            <h3 class="align-right">$${totalPrice}</h3>
        </div>
        <button class="purchase-btn">Complete order</button>`
    return cartHtml
}

const render = (menuArray) => {
    document.getElementById('menu').innerHTML = getMenuHtml(menuArray)
    document.getElementById('cart').innerHTML = getCartHtml()
}

render(menuArray)