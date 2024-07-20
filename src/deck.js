const deckArray = JSON.parse(localStorage.getItem("Deck"))
let placeHolder = null

function cardDelete(groupElement){
    console.log(placeHolder)

    if (!placeHolder){
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete?"
        
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
    
    cardButton.onclick = ()=>cardDelete(groupElement)
    document.body.prepend(groupElement)
})