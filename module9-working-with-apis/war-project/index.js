let deckId
let computerScore = 0
let myScore = 0
const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
const drawBtn = document.getElementById('draw')

document.addEventListener('click', (e) => {
    if (e.target.id === 'new-deck')
        newDeck()
    else if (e.target.id === 'draw')
        drawCards()
})

const newDeck = async () => {
    // API call to get new deck of cards
    const res = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await res.json()
    console.log(data)
    document.getElementById('remaining').textContent = `Remaining cards: ${data.remaining}`
    deckId = data.deck_id
    drawBtn.disabled = false
}

const drawCards = () => {
    // draw cards using API call, read https://deckofcardsapi.com/
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('remaining').textContent = `Remaining cards: ${data.remaining}`
            document.getElementById('cards').innerHTML = `
                <div class="card-slot">    
                    <img class="card" src=${data.cards[0].image} />
                </div>
                <div class="card-slot">    
                    <img class="card" src=${data.cards[1].image} />
                </div>
            `
            const winnerText = determineWinner(data.cards[0], data.cards[1])
            document.getElementById('winner-text').textContent = winnerText

            if (data.remaining === 0) {
                gameWinner()
            }
        })
}

const gameWinner = () => {
    drawBtn.disabled = true
    if (computerScore > myScore)
        document.getElementById('winner-text').textContent = `The computer won the game!`
    else if (myScore > computerScore)
        document.getElementById('winner-text').textContent = `You won the game!`
    else
        document.getElementById('winner-text').textContent = `It's a game!`
}

const determineWinner = (card1, card2) => {
    const c1Index = valueOptions.indexOf(card1.value)
    const c2Index = valueOptions.indexOf(card2.value)

    if (c1Index > c2Index) {
        document.getElementById('computer-score').textContent = `Computer score: ${++computerScore}`
        return "Computer wins!"
    } else if (c2Index > c1Index) {
        document.getElementById('my-score').textContent = `My score: ${++myScore}`
        return "You win!"
    } else
        return "War!"
}