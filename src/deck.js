const deckArray = JSON.parse(localStorage.getItem("Deck"))
let placeHolder = null


function deleteCard(selectedCard){
    const updatedArray = deckArray.filter((card)=>{
        return selectedCard.id !== card.id
    })

    localStorage.setItem("Deck", JSON.stringify(updatedArray))
    location.reload()
}

function deleteButton(groupElement, selectedCard){
    console.log(placeHolder)

    if (!placeHolder){
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete?"
        deleteButton.onclick = ()=>deleteCard(selectedCard)

        groupElement.append(deleteButton)
        placeHolder = deleteButton

    }else{
        placeHolder.remove() 
        placeHolder = null
    }
}   


deckArray.forEach((card)=>{
    const groupElement = document.createElement("div")
    const cardImage = document.createElement("img")
    const cardButton = document.createElement("button")
    cardImage.src = card.card_images[0].image_url_small
    cardButton.append(cardImage)
    groupElement.append(cardButton)
    
    cardButton.onclick = ()=>deleteButton(groupElement, card)
    document.body.prepend(groupElement)
})