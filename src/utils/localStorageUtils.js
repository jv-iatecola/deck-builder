export function addDeck(data) {
    const stringData = JSON.stringify(data)
    localStorage.setItem("Deck", stringData)
}
