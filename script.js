let ignite = true;

function changeCard(event) {
    const card = event.currentTarget
    const bg = ignite ? "ignite" : "explorer"
    ignite = !ignite
    card.style.backgroundImage = `url(./assets/${bg}.svg)`
}