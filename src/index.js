import "../style.css"
import {addDeck} from "./utils/localStorageUtils"

const goToDeck = document.createElement("a")
const groupElement = document.createElement("div")
const deck = []

goToDeck.href = "/deck.html"
goToDeck.textContent = "Go To Deck"
document.body.prepend(goToDeck)

function addCardToDeck(card){
    deck.push(card)
    addDeck(deck)
    // console.log(deck)
}

async function getCardImage(){
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchInput.value}`
    document.body.prepend(groupElement)
    groupElement.innerHTML = ''

    const response = await fetch(url)
    const cards = await response.json()
    // console.log(cards)

    cards.data.forEach((card)=>{
        const imageElement = document.createElement("img")
        imageElement.src = card.card_images[0].image_url_small
        
        const imageButton = document.createElement("button")
        imageButton.append(imageElement)
        imageButton.onclick = ()=>addCardToDeck(card)

        groupElement.append(imageButton)
    })
}

const searchInput = document.createElement("input")
document.body.prepend(searchInput)

const searchButton = document.createElement("button")
searchButton.onclick = getCardImage
searchButton.textContent = "Search"
document.body.prepend(searchButton)
