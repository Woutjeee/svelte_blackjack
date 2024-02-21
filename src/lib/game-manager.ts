import { writable } from "svelte/store";

// Set default state to false.
export const gameStarted = writable<boolean>(false);

export const gameCards: Map<string, (number | string)[]> = new Map<string, (number | string)[]>();



const cardTitles: string[] = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
const cardNumbers: number[] = [1,2,3,4,5,6,7,8,9]

export const startGame = () => {
    cardTitles.forEach(card => {
        console.log(card);
        cardNumbers.forEach(num => {
            console.log(`${card} ${num}`)
            gameCards
        });
        gameCards.set(card, cardNumbers.forEach)
    });
};