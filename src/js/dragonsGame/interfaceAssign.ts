

export const gameStartBtn = document.querySelector("#gameStartBtn") as HTMLButtonElement;
export const deckContainer: HTMLElement | null = document.querySelector("#deck-container");

export const shuffledDeckContainer = document.querySelector("#shuffled-cont") as HTMLDivElement;
export const stack1Container = document.querySelector("#cardStackOpen1") as HTMLDivElement;
export const stack2Container = document.querySelector("#cardStackOpen2") as HTMLDivElement;
export const player1Deck = document.querySelector("#player1Deck") as HTMLDivElement;
export const player2Deck = document.querySelector("#player2Deck") as HTMLDivElement;

export const playerTurnSpan = document.querySelector("#playerTurn") as HTMLSpanElement;
export const cardStack = document.querySelector("#cardStack") as HTMLDivElement;
export const win1 = document.querySelector("#win1") as HTMLDivElement;
export const win2 = document.querySelector("#win2") as HTMLDivElement;
export const winning1 = document.querySelector("#winning1") as HTMLSpanElement;
export const winning2 = document.querySelector("#winning2") as HTMLSpanElement;

export const coinPilePlayer1 = document.querySelector("#coin-pile-player1") as HTMLDivElement;
export const coinPilePlayer2 = document.querySelector("#coin-pile-player2") as HTMLDivElement;
export var coins1  = coinPilePlayer1.children as HTMLCollectionOf<HTMLElement>;
export var coins2  = coinPilePlayer2.children as HTMLCollectionOf<HTMLElement>;

export const countCardsBtn = document.querySelector("#countCardsBtn") as HTMLButtonElement;
export var countCards1 = document.querySelector("#countCards1") as HTMLSpanElement;
export var countCards2 = document.querySelector("#countCards2") as HTMLSpanElement;