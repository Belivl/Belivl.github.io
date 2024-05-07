import { hueMap, getHueValue, generateColor, colorCard1 } from "./dragonsGame/color";
import type { Card } from "./dragonsGame/color";
import {gameStartBtn, deckContainer,shuffledDeckContainer, stack1Container, stack2Container, player1Deck, player2Deck,playerTurnSpan, cardStack  } from "./dragonsGame/interfaceAssign";
import { coins1, coins2, win1, win2, winning1, winning2,countCardsBtn, countCards1, countCards2, tempStack, btnPlaceStack1, btnPlaceStack2 } from "./dragonsGame/interfaceAssign";

const logGameBtn = document.querySelector("#logGameBtn");
const cardPileCount = document.querySelector("#cardPileCount");
const revealPileBtn =  document.querySelector("#revealPileBtn");
const cardStackTemp = document.querySelector("#cardStackTemp");
const cardStackTempChildren = cardStackTemp?.children;
const cardStackCount1 = document.querySelector("#cardStackCount1");
const cardStackCount2 = document.querySelector("#cardStackCount2");
// Button Start
      // run these:
      // 1. generate deck
      // 2. shuffle deck
      // 3. display deck
      // 4. display shuffled deck
      // 5. pop 2 cards from the top of the stack and put them into two different stacks
      // 6. display the two stacks
      // 7. display player turn
      //


//List of functions
//let deck: Card[] = generateDeck(); //Create a deck
//shuffleDeck(deck); //Shuffle the deck
//popCards(deck, stack1, stack2); //Distribute the cards to the 2 open stacks

//checkAllTrue(player1flipped); //Check if player deck is all flipped




function putDownStack(stack1){
    
           let tempValue = tempStack.innerText;
           if(tempValue == "") return;
           tempStack.innerText = "";
           stack1Container.innerText = tempValue;
           
           stack1.push(tempValue);
           cardStackCount1.innerText = stack1.toString();
           let cardValue = stack1[stack1.length - 1];
           stack1Container.innerHTML = "";
           stack1Container.innerHTML = cardValue.toString();
           stack1Container.style.backgroundColor = colorCard1(cardValue);       
}
function putDownStack2(stack2){
    
           let tempValue = tempStack.innerText;
           if(tempValue == "") return;
           tempStack.innerText = "";
           stack2Container.innerText = tempValue;
           
           stack2.push(tempValue);
           cardStackCount2.innerText = stack2.toString();
           let cardValue = stack2[stack2.length - 1];
           stack2Container.innerHTML = "";
           stack2Container.innerHTML = cardValue.toString();
           stack2Container.style.backgroundColor = colorCard1(cardValue);       
}

interface Player {
        deck: number[];
        cards: number[];
      }

      interface CardElement extends HTMLDivElement {
        value: number;
      }
      


      // Function to generate a deck of cards
      function generateDeck(): Card[] {
        let deck: Card[] = [];
        const cardValues: Card[] = [-2, 0, 1, 2, 3, 4, 5, 6, 7, 8];
        const numCardsPerValue: number = 4;

        for (let value of cardValues) {
          for (let i = 0; i < numCardsPerValue; i++) {
            deck.push(value);
          }
        }

        return deck;
      }

      // Function to shuffle the deck
      function shuffleDeck(deck: Card[]): void {
        for (let i = deck.length - 1; i > 0; i--) {
          const j: number = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]];
        }
      }
      // Generate the deck
      //let deck: Card[] = generateDeck();

      // Display the deck in HTML
      
      
      // Shuffle the deck
      //shuffleDeck(deck);
      

      //shuffledDeckContainer.style.backgroundColor = "blue";

      /** 
      deck.forEach((card) => {
        const cardDiv: HTMLDivElement = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.textContent = card.toString();
        shuffledDeckContainer.appendChild(cardDiv);
      });*/

      

      // Function to pop 2 cards from the top of the stack and put them into two different stacks
      function popCards(stack: Card[], stack1: Card[], stack2: Card[]): void {
        if (stack.length >= 2) {
          stack1.push(stack.pop()!);
          stack1Container.innerHTML = stack1.toString();
          stack2.push(stack.pop()!);
          stack2Container.innerHTML = stack2.toString();
        } else {
          console.error("Not enough cards in the stack to pop.");
        }
      }

      //let stack1: Card[] = [];
      //let stack2: Card[] = [];
      //Distribute the cards to the 2 open stacks
      //popCards(deck, stack1, stack2);

      /**
       * for testing
       
      //Update values of pile
      const cardDivUpdate: HTMLDivElement = document.createElement("div");
      cardDivUpdate.style.backgroundColor = "green";
      cardDi4vUpdate.style.display = "flex";
      cardDivUpdate.style.flexWrap = "wrap";
      cardDivUpdate.style.gap = "12px";
      shuffledDeckContainer.insertAdjacentElement("beforeend", cardDivUpdate);

      deck.forEach((card) => {
        const cardDiv: HTMLDivElement = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.textContent = card.toString();
        const hueValue: number = getHueValue(card);
        const color: string = generateColor(hueValue);
        cardDiv.style.backgroundColor = color; // Apply background color
        cardDivUpdate.appendChild(cardDiv);
      });*/

      function colorCardInStack() {
        var stack1Value = parseFloat(stack1Container.innerHTML);
        var stack2Value = stack2Container.innerHTML;

        const hueValue: number = getHueValue( stack1Value ) ;
        const color: string = generateColor(hueValue);
        stack1Container.style.backgroundColor = color;

        const hueValue2: number = getHueValue(stack2Value);
        const color2: string = generateColor(hueValue2);
        stack2Container.style.backgroundColor = color2;
      }
      //colorCardInStack();
      
      //let player1Array = deck.splice(-6);
      //let player2Array = deck.splice(-6);

      //console.log(player1Array);
      //console.log(player2Array);
      //player1Deck.innerHTML = "";
      //player2Deck.innerHTML = "";
      
      // player1Array.forEach((card) => {
      //   const cardDiv: HTMLDivElement = document.createElement("div");
      //   //cardDiv.classList.add("card-placed");
      //   //cardDiv.classList.add("card-down");
      //   cardDiv.style.width = "8rem";
      //   cardDiv.style.height = "12rem";
      //   cardDiv.style.color = "black";
      //   cardDiv.style.borderRadius = "8px";
      //   cardDiv.style.display = "grid";
      //   cardDiv.style.placeItems = "center";
      //   cardDiv.style.fontSize = "24px";
      //   cardDiv.style.fontWeight = "700";
      //   cardDiv.textContent = card.toString();
      //   const hueValue: number = getHueValue(card);
      //   const color: string = generateColor(hueValue);
      //   cardDiv.style.backgroundColor = color; // Apply background color
      //   player1Deck.appendChild(cardDiv);
      // });
      // player2Array.forEach((card) => {
      //   const cardDiv: HTMLDivElement = document.createElement("div");
      //   cardDiv.classList.add("card-placed");
      //   cardDiv.classList.add("card-down");
      //   cardDiv.style.width = "8rem";
      //   cardDiv.style.height = "12rem";
      //   cardDiv.style.color = "black";
      //   cardDiv.style.borderRadius = "8px";
      //   cardDiv.style.display = "grid";
      //   cardDiv.style.placeItems = "center";
      //   cardDiv.style.fontSize = "24px";
      //   cardDiv.style.fontWeight = "700";
      //   cardDiv.textContent = card.toString();
      //   cardDiv.style.backgroundColor = colorCard1(card); // Apply background color
      //   player2Deck.appendChild(cardDiv);
      // });

      function revealPile(deck){
        if(deck.length == 0){
          alert("Game over"); return;}
        let currentCard = deck[deck.length - 1];
        deck.pop();
        tempStack.innerText = currentCard.toString();
        cardPileCount.innerText = deck.length.toString();
        
      }
      
      

      var playerTurn = 1;
      function updateTurn() {
        if (playerTurn) {
          playerTurnSpan.innerText = "1";
        } else {
          playerTurnSpan.innerText = "2";
        }
      }
      updateTurn();

      

      //sim winning

      let player1Coins = 0;
      let player2Coins = 0;
      
    var nextCoinIndex1 = 0;
    var nextCoinIndex2 = 0;
      
    // Function to reveal the next hidden coin
    function revealNextCoin(nextCoinIndex, coinArray) {
        if (nextCoinIndex < coinArray.length) {
            coinArray[nextCoinIndex].style.display = "inline"; // or "block" based on your layout
            nextCoinIndex++;
        }
    }
     // Initially hide all coins
    Array.from(coins1).forEach(function(coin) {
        coin.style.display = "none";
    });
     // Initially hide all coins
    Array.from(coins2).forEach(function(coin) {
        coin.style.display = "none";
    });


    

      win1.addEventListener("click", function () {
        if(player1Coins < 2){
            player1Coins += 1;
            revealNextCoin(nextCoinIndex1,coins1);
        }else{
            alert("Player 1 have won 3 coins.");
            player1Coins = 0;
            player2Coins = 0;
        }
        winning1.innerText = player1Coins.toString();
      })
      win2.addEventListener("click", function () {
        if(player2Coins < 3){
            player2Coins += 1;
            revealNextCoin(nextCoinIndex2,coins2);
        }else{
            alert("Player 2 have won 3 coins.");
            player1Coins = 0;
            player2Coins = 0;
        }
        winning2.innerText = player2Coins.toString();
      })
      
      

      //Count points from deck
    
      //console.log(player1Array.length);
      function countPoints(array){
        let count = 0;
        let nrCols = array.length / 2;
        //console.log(nrCols); array.length has to be equal to divide into columns 
        for (let i = 0; i < nrCols; i++) {
          if (array[i] === array[i+nrCols]) {
              array[i] = 0;
              array[i+nrCols] = 0;
          }
        }
        for (let num of array) {
          count += num;
        }
        //console.log(count);
        return count;
      }
      
     

      function whoWinCoin(playerArr1, playerArr2){
        let player1Score = countPoints(playerArr1);
        let player2Score = countPoints(playerArr2);
        if(player1Score > player2Score){
            alert("Player 1 win");
        }
        if(player1Score == player2Score){
            alert("Draw!");
        }
        if(player1Score < player2Score){
            alert("Player 2 win");
        }
      }
      //whoWinCoin(player1Array,player2Array);
      let playerStarting = 1;
      function radomizePlayerStart(numberOfPlayers){
        return (Math.floor(Math.random() * numberOfPlayers) + 1);
      }

      function colorCardsDeck(value,array){
        const hueValue: number = getHueValue( value );
          const color: string = generateColor(hueValue);
          array.style.backgroundColor = color;
          array.innerText = value;
      }
      function clearStack(stack){
        stack.innerHTML = "";
        stack.style.backgroundColor = "white";
      }

      stack1Container.addEventListener("click", function () {
          //alert("Stack 1 clicked");
          var stack1Value = stack1Container.innerHTML;
          //cardStackCount1.innerText = stack1Value.toString();
          colorCardsDeck(stack1Value,tempStack);
          clearStack(stack1Container);
          
        });
        stack2Container.addEventListener("click", function () {
          //alert("Stack 2 clicked");
          var stack2Value = stack2Container.innerHTML;
          colorCardsDeck(stack2Value,tempStack);
          clearStack(stack2Container);
        });

         function checkAllTrue(array) {
            return array.every(value => value === true);
        }

        function logGame(deck, stack1, stack2,player1Array,player2Array) {
          console.log("Deck: " + deck);
          console.log("Stack1: " + stack1);
          console.log("Stack2: " + stack2);
          console.log("P1Deck: " + player1Array);
          console.log("P2Deck: " + player2Array);
        }



      function gameStart(){
        let deck: Card[] = generateDeck();
        let stack1: Card[] = [];
        let stack2: Card[] = [];

               
        
        logGameBtn?.addEventListener("click", function () {
          logGame(deck, stack1, stack2,player1Array,player2Array);
        })

        //Shuffle the deck
        shuffleDeck(deck);
        console.log("Deck: " + deck);
        //Distribute the cards to the 2 open stacks
        popCards(deck, stack1, stack2);
                cardStackCount1.innerText = stack1.toString();
cardStackCount2.innerText = stack2.toString();
        //Display the amount of cards in the deck
        cardPileCount.innerText = deck.length.toString();

        console.log("Deck: " + deck);
        console.log("Stack1: " + stack1);
        console.log("Stack2: " + stack2);
        
         
        //Distribute the cards to the 2 player decks
        let player1Array = deck.splice(-6);
        let player2Array = deck.splice(-6);
        let player1flipped = Array(6).fill(false);
        let player2flipped = Array(6).fill(false);
        console.log("Pile: " + deck);
        console.log("P1Deck: " + player1Array);
        console.log("P2Deck: " + player2Array);
        
        //Display values of plaayer1 deck
         const spanValues1 = document.querySelectorAll(".spanValue1");
         const spanValues2 = document.querySelectorAll(".spanValue2");
         let i1 = 0;
        spanValues1.forEach(element => {
          element.innerText = player1Array[i1].toString();
          i1++;
        });
        i1 = 0;
        spanValues2.forEach(element => {
          element.innerText = player2Array[i1].toString();
          i1++;
        });
        


       //Sim player action1
      //Reveal first card from stack
        //Decide if take or put to Open stack
//Sim take stack1
let tempValue = stack1.pop();
console.log("Stack1: " + stack1);
console.log("Stack2: " + stack2);
console.log("Popped card: " + tempValue);
//Choose where to put the card
let tempValue2 = player1Array[0];
console.log("Popped card from p1: " + tempValue2);
player1Array[0] = tempValue;
console.log("P1Deck: " + player1Array);
//Choose which stack top ut the card
stack1.push(tempValue2);
console.log("Stack1: " + stack1);
console.log("Stack2: " + stack2);

        revealPileBtn.addEventListener("click", function(){
          revealPile(deck);
        })

        //Assign click event listeners for temp stack
        for (const child of cardStackTempChildren) {
  
  child.addEventListener("click", () => {
    let tempIndex:number = child.textContent;
    let tempValue = tempStack.innerText;
    let tempValue2 = player1Array[tempIndex-1];
    tempStack.innerText = tempValue2.toString();
    player1Array[tempIndex-1] = tempValue.toString();
    //console.log(tempValue);
  });
}

        btnPlaceStack1.addEventListener("click", function(){
          putDownStack(stack1);
        } )
        btnPlaceStack2.addEventListener("click", function(){
          
          putDownStack2(stack2);
        } )
        if(checkAllTrue(player1flipped) || checkAllTrue(player2flipped)){
          whoWinCoin(player1Array,player2Array);
        }
        
        //Create a copy of the deck to be used when all cards from the stack are removed (actually get them from the two open stacks)
        let deckCopy = [...deck];
        //Clear previous player decks
        //player1Deck.innerHTML = "";
        //player2Deck.innerHTML = "";
        //Display player decks
        // player1Array.forEach((card) => {
        //   const cardDiv: HTMLDivElement = document.createElement("div");
        //   //cardDiv.classList.add("card-placed");
        //   //cardDiv.classList.add("card-down");
        //   cardDiv.style.width = "8rem";
        //   cardDiv.style.height = "12rem";
        //   cardDiv.style.color = "black";
        //   cardDiv.style.borderRadius = "8px";
        //   cardDiv.style.display = "grid";
        //   cardDiv.style.placeItems = "center";
        //   cardDiv.style.fontSize = "24px";
        //   cardDiv.style.fontWeight = "700";
        //   cardDiv.textContent = card.toString();
        //   const hueValue: number = getHueValue(card);
        //   const color: string = generateColor(hueValue);
        //   cardDiv.style.backgroundColor = color; // Apply background color
        //   player1Deck.appendChild(cardDiv);
        // });
        // player2Array.forEach((card) => {
        //   const cardDiv: HTMLDivElement = document.createElement("div");
        //   cardDiv.classList.add("card-placed");
        //   cardDiv.classList.add("card-down");
        //   cardDiv.style.width = "8rem";
        //   cardDiv.style.height = "12rem";
        //   cardDiv.style.color = "black";
        //   cardDiv.style.borderRadius = "8px";
        //   cardDiv.style.display = "grid";
        //   cardDiv.style.placeItems = "center";
        //   cardDiv.style.fontSize = "24px";
        //   cardDiv.style.fontWeight = "700";
        //   cardDiv.textContent = card.toString();
        //   cardDiv.style.backgroundColor = colorCard1(card); // Apply background color
        //   player2Deck.appendChild(cardDiv);
        // });

        //Info only count points from deck
         countCardsBtn.addEventListener("click", function(){
          countCards1.innerText = countPoints(player1Array).toString();
          countCards2.innerText = countPoints(player2Array).toString();
        });

        //Color two open stacks (probably update every turn or card draw)
        colorCardInStack();
        //Color and turn card from stack
        if(cardStack){
        cardStack.innerText = "Stack";
        cardStack.addEventListener("click", function () {
        let currentCard = deck[deck.length - 1];
        deck.pop();
        if(cardStack){
          cardStack.innerText = currentCard.toString();
          cardStack.style.backgroundColor = colorCard1(currentCard);
        }
        console.log("Cards left in Stack:"+deck.length);
        if (deck.length == 0) {
          alert("Game over");
          //deck = [...deckCopy]; get cards from the two open stacks but not the top one, shuffle and place into the stack
        }

        // btnPlaceStack1.addEventListener("click", function(){
        //   console.log("Test1")
        //   // let tempValue = tempStack.innerText;
        //   // tempStack.innerText = "";
        //   // stack1Container.innerText = tempValue;
        //   // stack1.push(tempValue);

           
        //   // let cardValue = stack1[stack1.length - 1];
        //   // stack1Container.innerHTML = "";
        //   // stack1Container.innerHTML = cardValue.toString();
        //   // stack1Container.style.backgroundColor = colorCard1(cardValue);
        //   // if(deck.length != 0){
        //   //   moveCardtoStack1(deck,stack1);
        //   // }else{
        //   //   alert("Game over");
        //   // }
          
        // } )
        

        btnPlaceStack2.addEventListener("click", function () {
          if(deck.length != 0){
            moveCardtoStack2(deck,stack2);
          }else{
            alert("Game over");
          }
        })

        

        
        
      });
      }
      let roundCounter = 1;
      let gameRunning = true;
      // Define the number of players
      const numberOfPlayers = 2;
      
      
      /** 
      while (gameRunning) {
        console.log("Round: " + roundCounter);
        playerStarting = radomizePlayerStart(numberOfPlayers);
        console.log("Player starting: " + playerStarting);
      }*/
      }
      //Start new game
      gameStartBtn.addEventListener("click", gameStart)

      function playRound(){
        //Update turn
        updateTurn();
        
        

      }
      function moveCardtoStack1(deck: Card[], stack1: Card[]){
          //console.log(stack1);
          stack1.push(deck.pop()!);
          let cardValue = stack1[stack1.length - 1];
          stack1Container.innerHTML = "";
          stack1Container.innerHTML = cardValue.toString();
          stack1Container.style.backgroundColor = colorCard1(cardValue);
        }
        function moveCardtoStack2(deck: Card[], stack2: Card[]){
          //console.log(stack1);
          stack2.push(deck.pop()!);
          let cardValue = stack2[stack2.length - 1];
          stack2Container.innerHTML = "";
          stack2Container.innerHTML = cardValue.toString();
          stack2Container.style.backgroundColor = colorCard1(cardValue);
        }
       

//const flipCard1 = document.querySelector("#flipCard1") as HTMLDivElement;
//flipCard1.addEventListener("click", function () {
 // alert("Flip card 1");
//})

var flipCards = document.querySelectorAll('.cardContainer');
[...flipCards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

const flipCardsTest: NodeListOf<HTMLDivElement>  = document.querySelectorAll(".flip-card-Test");
Array.from(flipCardsTest).forEach((card: Element) => {
  card.addEventListener('click', function() {
    flipCard(this as HTMLElement); // Call flipCard function passing the current card element
  });
});

  function flipCard(card) {
  card.classList.toggle('flipped');
}

document.addEventListener("DOMContentLoaded", function () {

    gameStart();
  });