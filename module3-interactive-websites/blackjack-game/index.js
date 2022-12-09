let player = {
    name: "Peter",
    chips: 100
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let msg = ""
let msgEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips

const getRandomCard = () => {
    let temp = Math.floor(Math.random() * (13 - 2) + 1)
    if (temp === 1)
        return 11
    else if (temp >= 10)
        return 10
    else
        return temp
}

const startGame = () => {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    hasBlackJack = false
    renderGame()
}

const renderGame = () => {
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        if (cards.length >= 5)
            msg = "5-Card Charlie!"
        else
            msg = "Do you want to draw a new card?"
    } else if (sum === 21) {
        msg = "You got Blackjack!"
        hasBlackJack = true
    } else {
        msg = "You are out of the game!"
        isAlive = false
    }

    msgEl.textContent = msg
}

const newCard = () => {
    if (isAlive === false || hasBlackJack === true || cards.length >= 5) 
        return
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderGame()
}