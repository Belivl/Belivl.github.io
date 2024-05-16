"use client";
import React, { useState } from "react";
import { Button } from "../../components/ui/button.tsx";
import "../../styles/Farmers.css";

class Player {
  constructor(name) {
    this.name = name;
    this.animals = {
      rabbit: 0,
      sheep: 0,
      pig: 0,
      cow: 0,
      horse: 0,
      dog_small: 0,
      dog_big: 0,
    };
  }
  addAnimal(animal) {
    this.animals[animal]++;
  }
}

class Dice {
  constructor() {
    this.sides = {
      dice1: [
        "wolf",
        "cow",
        "rabbit",
        "rabbit",
        "rabbit",
        "rabbit",
        "rabbit",
        "rabbit",
        "sheep",
        "sheep",
        "sheep",
        "pig",
        "pig",
      ],
      dice2: [
        "fox",
        "horse",
        "rabbit",
        "rabbit",
        "rabbit",
        "rabbit",
        "rabbit",
        "sheep",
        "sheep",
        "pig",
        "pig",
      ],
    };
  }

  rollDice1() {
    return this.sides.dice1[
      Math.floor(Math.random() * this.sides.dice1.length)
    ];
  }

  rollDice2() {
    return this.sides.dice2[
      Math.floor(Math.random() * this.sides.dice2.length)
    ];
  }
}
const dice = new Dice();
class Game {
  constructor() {
    this.players = [];
  }

  addPlayer(name) {
    this.players.push(new Player(name));
  }
}

let game = new Game();
game.addPlayer("Player 1");
game.addPlayer("Player 2");

const initialPlayerState = {
  name: "",
  animals: {
    rabbit: 0,
    sheep: 0,
    pig: 0,
    cow: 0,
    horse: 0,
    dog_small: 0,
    dog_big: 0,
  },
};

const initialGameState = {
  players: [
    { ...initialPlayerState, name: "Player 1" },
    { ...initialPlayerState, name: "Player 2" },
  ],
  currentPlayerIndex: 0,
};

export default function Farmers() {
  const [gameState, setGameState] = useState(initialGameState);
  const dice = new Dice();
  const exchange1 = (buyAnimal, sellAnimal, sellAmount, buyAmount) => {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    if (currentPlayer.animals[sellAnimal] >= sellAmount) {
      const updatedPlayer = {
        ...currentPlayer,
        animals: {
          ...currentPlayer.animals,
          [sellAnimal]: currentPlayer.animals[sellAnimal] - sellAmount,
          [buyAnimal]: currentPlayer.animals[buyAnimal] + buyAmount,
        },
      };
      const updatedPlayers = [...gameState.players];
      updatedPlayers[gameState.currentPlayerIndex] = updatedPlayer;
      setGameState({ ...gameState, players: updatedPlayers });
    } else {
      // Player doesn't have enough animals to sell
      alert("You don't have enough animals to make this exchange.");
    }
  };
  const handleExchange = (buyAnimal, sellAnimal, rate) => {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const sellAnimalCount = currentPlayer.animals[sellAnimal];
    if (sellAnimalCount >= rate) {
      const updatedPlayer = {
        ...currentPlayer,
        animals: {
          ...currentPlayer.animals,
          [sellAnimal]: sellAnimalCount - rate,
          [buyAnimal]: currentPlayer.animals[buyAnimal] + 1,
        },
      };
      const updatedPlayers = [...gameState.players];
      updatedPlayers[gameState.currentPlayerIndex] = updatedPlayer;
      setGameState({ ...gameState, players: updatedPlayers });
    } else {
      // Player doesn't have enough animals to sell
      alert("You don't have enough animals to make this exchange.");
    }
  };

  const exchangeData = [
    { buyAnimal: "sheep", sellAnimal: "rabbit", buyAmount: 1, sellAmount: 6 },
    { buyAnimal: "rabbit", sellAnimal: "sheep", buyAmount: 6, sellAmount: 1 },
    { buyAnimal: "pig", sellAnimal: "sheep", buyAmount: 1, sellAmount: 2 },
    { buyAnimal: "sheep", sellAnimal: "pig", buyAmount: 2, sellAmount: 1 },
    { buyAnimal: "cow", sellAnimal: "pig", buyAmount: 1, sellAmount: 3 },
    { buyAnimal: "pig", sellAnimal: "cow", buyAmount: 3, sellAmount: 1 },
    { buyAnimal: "horse", sellAnimal: "cow", buyAmount: 1, sellAmount: 2 },
    { buyAnimal: "cow", sellAnimal: "horse", buyAmount: 2, sellAmount: 1 },
    {
      buyAnimal: "dog_small",
      sellAnimal: "sheep",
      buyAmount: 1,
      sellAmount: 1,
    },
    {
      buyAnimal: "sheep",
      sellAnimal: "dog_small",
      buyAmount: 1,
      sellAmount: 1,
    },
    {
      buyAnimal: "dog_big",
      sellAnimal: "cow",
      buyAmount: 1,
      sellAmount: 1,
    },
    {
      buyAnimal: "cow",
      sellAnimal: "dog_big",
      buyAmount: 1,
      sellAmount: 1,
    },
    // Add more exchange data as needed
  ];

  const handleWolfRoll = (currentPlayer) => {
    if (currentPlayer.animals.dog_big > 0) {
      currentPlayer.animals.dog_big--;
    } else {
      for (let animal in currentPlayer.animals) {
        if (
          animal !== "horse" &&
          animal !== "dog_small" &&
          animal !== "dog_big"
        ) {
          currentPlayer.animals[animal] = 0;
        }
      }
    }
  };
  const handleFoxRoll = (currentPlayer) => {
    if (currentPlayer.animals.dog_small > 0) {
      currentPlayer.animals.dog_small--;
    } else {
      currentPlayer.animals.rabbit = 0; // All rabbits die
    }
  };
  const restartGame = () => {
    setGameState(initialGameState);
  };
  const handleRollDice = () => {
    const currentPlayerIndex = gameState.currentPlayerIndex;
    //console.log(currentPlayerIndex);
    const nextPlayerIndex =
      currentPlayerIndex === gameState.players.length - 1
        ? 0
        : currentPlayerIndex + 1;
    //console.log(nextPlayerIndex);
    const result1 = dice.rollDice1();
    const result2 = dice.rollDice2();
    document
      .getElementById("dice1")
      .querySelector("img").src = `/farmers/${result1}.svg`;
    document.getElementById("dice1").querySelector("img").alt = result1;
    document
      .getElementById("dice2")
      .querySelector("img").src = `/farmers/${result2}.svg`;
    document.getElementById("dice2").querySelector("img").alt = result1;

    // Logic for handling the received animal based on dice results

    const currentPlayer = { ...gameState.players[currentPlayerIndex] };
    let receivedAnimal = "";

    //Player rolls on Dice 1 a Wolf
    if (result1 === "wolf") {
      handleWolfRoll(currentPlayer);
      //If other one is animal dont do anything?
    }
    //Player rolls on Dice 2 a Fox
    if (result2 === "fox") {
      handleFoxRoll(currentPlayer);
      //If other one is rabbit dont do anything?
    }

    //Check if player has atleast one of the animal
    if (
      currentPlayer.animals[result1] == 0 &&
      result1 === result2 &&
      result1 !== "wolf" &&
      result2 !== "fox"
    ) {
      //Player has no animal of that species so give 1
      receivedAnimal = result1;
      currentPlayer.animals[result1]++;
      console.log("Player has no animal of that species so gets 1");
      console.log(`${currentPlayer.name} received ${receivedAnimal}`);
    } else if (
      currentPlayer.animals[result1] > 0 &&
      result1 !== "wolf" &&
      result2 !== "fox"
    ) {
      //Player has atleast 1 of the animal of that species so count pairs
      var totalAnimals = currentPlayer.animals[result1] + 1;
      var pairs = Math.floor(totalAnimals / 2);
      receivedAnimal = result1;
      console.log("Pairs: " + pairs);
      currentPlayer.animals[result1] = currentPlayer.animals[result1] + pairs;
      console.log(`${currentPlayer.name} received ${receivedAnimal}`);
    } else if (
      currentPlayer.animals[result2] > 0 &&
      result1 !== "wolf" &&
      result2 !== "fox"
    ) {
      //Player has atleast 1 of the animal of that species so count pairs
      var totalAnimals = currentPlayer.animals[result2] + 1;
      var pairs = Math.floor(totalAnimals / 2);
      receivedAnimal = result2;
      console.log("Pairs: " + pairs);
      currentPlayer.animals[result1] = currentPlayer.animals[result1] + pairs;
      console.log(`${currentPlayer.name} received ${receivedAnimal}`);
    }

    const updatedPlayers = [...gameState.players];

    console.log(updatedPlayers);
    console.log(currentPlayer);
    console.log(currentPlayerIndex);
    updatedPlayers[currentPlayerIndex] = currentPlayer;

    console.log(updatedPlayers);
    setGameState({
      ...gameState,
      players: updatedPlayers,
      currentPlayerIndex: nextPlayerIndex,
    });
    //winningCondition();
    //console.log(`${currentPlayer.name} received ${receivedAnimal}`);
  };
  const winningCondition = () => {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const playerAnimals = Object.keys(currentPlayer.animals); // Get the animals owned by the current player
    const requiredAnimals = ["rabbit", "sheep", "pig", "cow", "horse"];
    const hasRequiredAnimal = requiredAnimals.some((animal) =>
      playerAnimals.includes(animal)
    );
    if (hasRequiredAnimal) {
      console.log(`${currentPlayer.name} wins!`);
      // Handle winning condition here
    } else {
      console.log("No winning condition");
    }
  };

  return (
    <div className="App flex flex-col gap-12 justify-center items-center">
      <h1>Super Farmers Game</h1>
      <div>
        <h3 className="font-bold text-3xl">
          Player {gameState.currentPlayerIndex + 1} turn
        </h3>

        <div className="grid grid-cols-3 gap-6  w-full">
          <div className="diceBlock mt-12 flex flex-col gap-6 bg-grey-400 p-5 rounded-2xl border border-grey-200 justify-start w-fit h-fit">
            <div className="flex gap-6 ">
              <div className="dice dice1" id="dice1">
                <img src="/farmers/wolf.svg" alt="wolf" />
              </div>
              <div className="dice dice2" id="dice2">
                <img src="/farmers/fox.svg" alt="fox" />
              </div>
            </div>

            <Button onClick={handleRollDice} className="w-full">
              Roll Dice
            </Button>
            <Button
              variant={"outline"}
              className="w-full"
              onClick={restartGame}
            >
              Restart
            </Button>
          </div>
          <div className="exBlock">
            <div className="mt-12 flex flex-col gap-3 bg-grey-400 border p-5 border-grey-200 rounded-2xl items-start h-fit w-fit">
              <div className="p-2 flex gap-3 items-center bg-grey-300 rounded-xl">
                <Button variant={"outline"}>
                  {" "}
                  <img
                    className="w-8 h-8"
                    src="/farmers/sheep.svg"
                    alt="sheep"
                  />
                </Button>
                <span className="text-3xl">=</span>
                <Button variant={"outline"}>
                  6x{" "}
                  <img
                    className="w-8 h-8"
                    src="/farmers/rabbit.svg"
                    alt="rabbit"
                  />
                </Button>
              </div>
              <div className="p-2 flex gap-3 items-center bg-grey-300 rounded-xl">
                <Button variant={"outline"}>
                  {" "}
                  <img className="w-8 h-8" src="/farmers/pig.svg" alt="pig" />
                </Button>
                <span className="text-3xl">=</span>
                <Button variant={"outline"}>
                  2x{" "}
                  <img
                    className="w-8 h-8"
                    src="/farmers/sheep.svg"
                    alt="sheep"
                  />
                </Button>
              </div>
              <div className="p-2 flex gap-3 items-center bg-grey-300 rounded-xl">
                <Button variant={"outline"}>
                  {" "}
                  <img className="w-8 h-8" src="/farmers/cow.svg" alt="cow" />
                </Button>
                <span className="text-3xl">=</span>
                <Button variant={"outline"}>
                  3x{" "}
                  <img className="w-8 h-8" src="/farmers/pig.svg" alt="pig" />
                </Button>
              </div>
              <div className="p-2 flex gap-3 items-center bg-grey-300 rounded-xl">
                <Button variant={"outline"}>
                  {" "}
                  <img
                    className="w-8 h-8"
                    src="/farmers/horse.svg"
                    alt="horse"
                  />
                </Button>
                <span className="text-3xl">=</span>
                <Button variant={"outline"}>
                  2x{" "}
                  <img className="w-8 h-8" src="/farmers/cow.svg" alt="cow" />
                </Button>
              </div>
              <div className="p-2 flex gap-3 items-center bg-grey-300 rounded-xl">
                <Button variant={"outline"}>
                  {" "}
                  <img
                    className="w-8 h-8"
                    src="/farmers/dog_small.svg"
                    alt="dog_small"
                  />
                </Button>
                <span className="text-3xl">=</span>
                <Button variant={"outline"}>
                  {" "}
                  <img
                    className="w-8 h-8"
                    src="/farmers/sheep.svg"
                    alt="sheep"
                  />
                </Button>
              </div>
              <div className="p-2 flex gap-3 items-center bg-grey-300 rounded-xl">
                <Button variant={"outline"}>
                  {" "}
                  <img
                    className="w-8 h-8"
                    src="/farmers/dog_big.svg"
                    alt="dog_big"
                  />
                </Button>
                <span className="text-3xl">=</span>
                <Button variant={"outline"}>
                  {" "}
                  <img className="w-8 h-8" src="/farmers/cow.svg" alt="cow" />
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">Exchange</h3>
                <div>Click to Buy</div>
              </div>
            </div>
            <div className="exchange-shop">
              <h2>Exchange Shop</h2>
              <div className="grid grid-cols-2 gap-1 w-fit">
                {exchangeData.map((exchange, index) => (
                  <div key={index} className="exchange-item">
                    <Button
                      variant={"outline"}
                      onClick={() =>
                        exchange1(
                          exchange.buyAnimal,
                          exchange.sellAnimal,
                          exchange.sellAmount,
                          exchange.buyAmount
                        )
                      }
                    >
                      {exchange.buyAmount === 1 ? "" : exchange.buyAmount}
                      <img
                        className="w-8 h-8"
                        src={`/farmers/${exchange.buyAnimal}.svg`}
                        alt={exchange.buyAnimal}
                      />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="FarmP1Block flex flex-col gap-6 w-full">
            {gameState.players.map((player, index) => (
              <div
                key={index}
                className={`${
                  gameState.currentPlayerIndex === 0
                    ? "border-orange-500"
                    : "border-blue-500"
                } flex flex-col gap-6 bg-grey-400 p-3 rounded-2xl border-2 border-grey-200 mt-12 h-fit w-fit`}
              >
                <h3 className="font-bold text-3xl">{player.name}'s farm</h3>
                <div className="flex flex-row flex-wrap gap-2">
                  {Object.entries(player.animals).map(([animal, count]) => (
                    <div
                      key={animal}
                      className="flex gap-3 items-center bg-grey-300 p-3 rounded-xl border border-grey-200 text-2xl fot-semibold"
                    >
                      <img
                        className="animalIconS"
                        src={`/farmers/${animal}.svg`}
                        alt={`${animal}`}
                      />
                      x {count}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
