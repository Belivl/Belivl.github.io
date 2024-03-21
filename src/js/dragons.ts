interface Player {
        deck: number[];
        cards: number[];
      }

      interface CardElement extends HTMLDivElement {
        value: number;
      }

      // Define Card type
      type Card = -2 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      // Mapping of card values to hue values
      const hueMap: { [key in Card]: number } = {
        "-2": 0, // Red
        "0": 30, // Yellow
        "1": 60, // Green
        "2": 90, // Cyan
        "3": 120, // Blue
        "4": 150, // Purple
        "5": 180, // Pink
        "6": 210, // Reddish Pink
        "7": 240, // Orange
        "8": 270, // Yellow (same as 0)
      };

      // Function to get the hue value for a card
      function getHueValue(card: Card): number {
        return hueMap[card];
      }
      // Function to generate HSL color string based on hue value
      function generateColor(
        hue: number,
        saturation: number = 80,
        lightness: number = 60
      ): string {
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
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
      let deck: Card[] = generateDeck();

      // Display the deck in HTML
      const deckContainer: HTMLElement | null =
        document.getElementById("deck-container");
      if (deckContainer) {
        deck.forEach((card) => {
          const cardDiv: HTMLDivElement = document.createElement("div");
          cardDiv.classList.add("card1");
          cardDiv.textContent = card.toString();
          deckContainer.appendChild(cardDiv);
        });
      }
      // Shuffle the deck
      shuffleDeck(deck);
      // Display the shuffled deck in HTML
      const shuffledDeckContainer = document.querySelector(
        "#shuffled-cont"
      ) as HTMLDivElement;

      shuffledDeckContainer.style.backgroundColor = "blue";

      /** 
      deck.forEach((card) => {
        const cardDiv: HTMLDivElement = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.textContent = card.toString();
        shuffledDeckContainer.appendChild(cardDiv);
      });*/

      const stack1Container = document.querySelector(
        "#cardStackOpen1"
      ) as HTMLDivElement;
      const stack2Container = document.querySelector(
        "#cardStackOpen2"
      ) as HTMLDivElement;

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

      let stack1: Card[] = [];
      let stack2: Card[] = [];
      //Distribute the cards to the 2 open stacks
      popCards(deck, stack1, stack2);

      /**
       * for testing
       
      //Update values of pile
      const cardDivUpdate: HTMLDivElement = document.createElement("div");
      cardDivUpdate.style.backgroundColor = "green";
      cardDivUpdate.style.display = "flex";
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
        var stack1Value = stack1Container.innerHTML;
        var stack2Value = stack2Container.innerHTML;

        const hueValue: number = getHueValue(stack1Value);
        const color: string = generateColor(hueValue);
        stack1Container.style.backgroundColor = color;

        const hueValue2: number = getHueValue(stack2Value);
        const color2: string = generateColor(hueValue2);
        stack2Container.style.backgroundColor = color2;
      }
      colorCardInStack();
      const player1Deck = document.querySelector(
        "#player1Deck"
      ) as HTMLDivElement;
      const player2Deck = document.querySelector(
        "#player2Deck"
      ) as HTMLDivElement;
      let player1Array = deck.splice(-6);
      let player2Array = deck.splice(-6);

      //console.log(player1Array);
      //console.log(player2Array);
      player1Deck.innerHTML = "";
      player2Deck.innerHTML = "";
      player1Array.forEach((card) => {
        const cardDiv: HTMLDivElement = document.createElement("div");
        //cardDiv.classList.add("card-placed");
        //cardDiv.classList.add("card-down");
        cardDiv.style.width = "8rem";
        cardDiv.style.height = "12rem";
        cardDiv.style.color = "black";
        cardDiv.style.borderRadius = "8px";
        cardDiv.style.display = "grid";
        cardDiv.style.placeItems = "center";
        cardDiv.style.fontSize = "24px";
        cardDiv.style.fontWeight = "700";
        cardDiv.textContent = card.toString();
        const hueValue: number = getHueValue(card);
        const color: string = generateColor(hueValue);
        cardDiv.style.backgroundColor = color; // Apply background color
        player1Deck.appendChild(cardDiv);
      });
      player2Array.forEach((card) => {
        const cardDiv: HTMLDivElement = document.createElement("div");
        cardDiv.classList.add("card-placed");
        cardDiv.classList.add("card-down");
        cardDiv.style.width = "8rem";
        cardDiv.style.height = "12rem";
        cardDiv.style.color = "black";
        cardDiv.style.borderRadius = "8px";
        cardDiv.style.display = "grid";
        cardDiv.style.placeItems = "center";
        cardDiv.style.fontSize = "24px";
        cardDiv.style.fontWeight = "700";
        cardDiv.textContent = card.toString();
        cardDiv.style.backgroundColor = colorCard1(card); // Apply background color
        player2Deck.appendChild(cardDiv);
      });

      function colorCard1(card) {
        const hueValue: number = getHueValue(card);
        const color: string = generateColor(hueValue);
        return color;
      }
      const playerTurnSpan = document.querySelector(
        "#playerTurn"
      ) as HTMLSpanElement;

      var playerTurn = 1;
      function updateTurn() {
        if (playerTurn) {
          playerTurnSpan.innerText = "1";
        } else {
          playerTurnSpan.innerText = "2";
        }
      }
      updateTurn();

      const cardStack = document.getElementById("cardStack") as CardElement;

      cardStack.innerText = "Stack";
      let deckCopy = [...deck];
      cardStack.addEventListener("click", function () {
        let currentCard = deck[deck.length - 1];
        deck.pop();
        cardStack.innerText = currentCard.toString();
        cardStack.style.backgroundColor = colorCard1(currentCard);
        console.log(deck.length);
        if (deck.length == 0) {
          alert("Game over");
          deck = [...deckCopy];
        }
      });


      








      //sim winning

      let player1Coins = 0;
      let player2Coins = 0;
      const win1 = document.getElementById("win1") as HTMLDivElement;
      const win2 = document.getElementById("win2") as HTMLDivElement;
      const winning1 = document.getElementById("winning1") as HTMLSpanElement;
      const winning2 = document.getElementById("winning2") as HTMLSpanElement;

      const coinPilePlayer1 = document.getElementById("coin-pile-player1") as HTMLDivElement;
      const coinPilePlayer2 = document.getElementById("coin-pile-player2") as HTMLDivElement;

  

      //coinPilePlayer1.innerHTML ="";
      //coinPilePlayer2.innerHTML ="";

    var nextCoinIndex1 = 0;
    var nextCoinIndex2 = 0;
      var coins1  = coinPilePlayer1.children;
      var coins2  = coinPilePlayer2.children;

      // Function to reveal the next hidden coin
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