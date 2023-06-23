import { initialCardIcons } from "./cards.js"

const randomize = () => {
    const shuffleCard = initialCardIcons;
    shuffleCard.sort(() => Math.random() - 0.5);
    return shuffleCard;
}

const gameSection = document.querySelector('.game__section_cards');

const createGameCard = () => {
    const cards = randomize();
    cards.forEach((item) => {
        const gameCardList = document.createElement("div");
        gameCardList.classList.add("game__card_list");
    
        const flippedCard = document.createElement("img"); 
        const notFlippedCard = document.createElement("img"); 
        notFlippedCard.classList.add("backface");
        flippedCard.classList.add("frontface");

        flippedCard.src = item.imgSrc;

        gameCardList.append(notFlippedCard, flippedCard);
        gameSection.append(gameCardList)

        gameCardList.addEventListener('click', (el) => {
            gameCardList.classList.toggle('flipped')
        } )
    })
}
createGameCard()
    

