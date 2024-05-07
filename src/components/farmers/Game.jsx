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
      dogS: 0,
      dogM: 0,  
    };
  }
 addAnimal(animal) {
    this.animals[animal]++;
  }

    tradeAnimal(fromAnimal, toAnimal, ratio) {
        if (this.animals[fromAnimal] >= ratio) {
            this.animals[fromAnimal] -= ratio;
            this.animals[toAnimal]++;
            console.log(`${this.name} traded ${ratio} ${fromAnimal} for 1 ${toAnimal}`);
        } else {
            console.log(`${this.name} doesn't have enough ${fromAnimal} to trade`);
        }
    }
}

class Dice {
  constructor() {
    this.sides = {
      dice1: [
        { name: "wolf" },
        { name: "cow" },
        { name: "rabbit" },
        { name: "rabbit" },
        { name: "rabbit" },
        { name: "rabbit" },
        { name: "rabbit" },
        { name: "rabbit" },
        { name: "sheep" },
        { name: "sheep" },
        { name: "sheep" },
        { name: "pig" },
        { name: "pig" },
         
      ],
      dice2: [
        { name: "fox" },
        { name: "horse" },
        { name: "rabbit" },
        { name: "rabbit" },
        { name: "rabbit" },
        { name: "rabbit" },
        { name: "rabbit" },
        { name: "sheep" },
        { name: "sheep" },
        { name: "pig" },
        { name: "pig" },
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

  playRound() {
    for (let player of this.players) {
      let dice1Result = this.dice.rollDice1();
      let dice2Result = this.dice.rollDice2();

      console.log(
        `${player.name} rolled ${dice1Result} and ${dice2Result}`
      );

      player.addAnimal(dice1Result);

      if (dice1Result === "wolf") {
        player.animals.rabbit = Math.max(0, player.animals - 2);
      }
      if (dice2Result === "fox") {
        player.animals.rabbit = Math.max(0, player.animals.rabbit - 2);
      }
    }
  }

 
}



let game = new Game();
game.addPlayer("Player 1");
game.addPlayer("Player 2");

export default function Farmers() {

  const handleRollDice = () => {
    const result1 = dice.rollDice1();
    const result2 = dice.rollDice2();
    document.getElementById("dice1").querySelector("img").src = `/farmers/${result1.name}.svg`;
    document.getElementById("dice1").querySelector("img").alt = result1.name;
    document.getElementById("dice2").querySelector("img").src = `/farmers/${result2.name}.svg`;
    document.getElementById("dice2").querySelector("img").alt = result1.name;
  };

  
  return <div className="App flex flex-col gap-12 justify-center items-center">
      <h1>Super Farmers Game</h1>
      <div>
      <h2>Belial's Turn</h2>
      <div className="mt-12 flex flex-col gap-6 bg-grey-400 p-5 rounded-2xl border border-grey-200 justify-start w-fit">
        <div className="flex gap-6 ">
        <div className="dice dice1" id="dice1">
            <img src="/farmers/wolf.svg" alt="wolf" />
        </div>
        <div className="dice dice2" id="dice2">
            <img src="/farmers/fox.svg" alt="fox" />
        </div>
      </div>
      
      <Button onClick={handleRollDice} className="w-full">Roll Dice</Button>
      </div>
      

      <div className="flex flex-col gap-6 bg-grey-300 p-5 rounded-2xl border border-grey-200 mt-12">
        <h3 className="text-3xl font-semibold">Player 1's Farm</h3>
        <div className="flex flex-row flex-wrap gap-8 bg-grey-400 p-5 rounded-xl">

            <div className="flex flex-col gap-3 bg-grey-300 p-5 rounded-xl border border-grey-200">
                <div className="flex flex-row gap-4 items-baseline">
                    <h3 className="text-2xl font-semibold">Rabbits</h3>
                    <div>x <span id="player1Rabbits" className="text-xl">60</span></div>
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="flex gap-2 items-center">
                        <img className="w-8 h-8" src="/farmers/male.svg" alt="male" />
                        <div className="flex gap-0">
                            <img className="animalIcon" src="/farmers/rabbit.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/rabbit.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/rabbit.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/rabbit.svg" alt="rabbit" />
                        </div>
                    </div>
                    <div className="flex w-full h-[2px] bg-grey-200"/>
                    <div className="flex gap-2 items-center">
                        <img className="w-8 h-8" src="/farmers/female.svg" alt="female" />
                        <div className="flex gap-0">
                            <img className="animalIcon" src="/farmers/rabbit.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/rabbit.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/rabbit.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/rabbit.svg" alt="rabbit" />
                        </div>
                    </div>
                </div>            
            </div>
             <div className="flex flex-col gap-3 bg-grey-300 p-5 rounded-xl border border-grey-200">
                <div className="flex flex-row gap-4 items-baseline">
                    <h3 className="text-2xl font-semibold">Sheep</h3>
                    <div>x <span id="player1Sheep" className="text-xl">24</span></div>
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="flex gap-2 items-center">
                        <img className="w-8 h-8" src="/farmers/male.svg" alt="male" />
                        <div className="flex gap-2">
                            <img className="animalIcon" src="/farmers/sheep.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/sheep.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/sheep.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/sheep.svg" alt="rabbit" />
                        </div>
                    </div>
                    <div className="flex w-full h-[2px] bg-grey-200"/>
                    <div className="flex gap-2 items-center">
                        <img className="w-8 h-8" src="/farmers/female.svg" alt="female" />
                        <div className="flex gap-2">
                            <img className="animalIcon" src="/farmers/sheep.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/sheep.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/sheep.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/sheep.svg" alt="rabbit" />
                        </div>
                    </div>
                </div>            
            </div>
             <div className="flex flex-col gap-3 bg-grey-300 p-5 rounded-xl border border-grey-200">
                <div className="flex flex-row gap-4 items-baseline">
                    <h3 className="text-2xl font-semibold">Pig</h3>
                    <div>x <span id="player1Pig" className="text-xl">20</span></div>
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="flex gap-2 items-center">
                        <img className="w-8 h-8" src="/farmers/male.svg" alt="male" />
                        <div className="flex gap-2">
                            <img className="animalIcon" src="/farmers/pig.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/pig.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/pig.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/pig.svg" alt="rabbit" />
                        </div>
                    </div>
                    <div className="flex w-full h-[2px] bg-grey-200"/>
                    <div className="flex gap-2 items-center">
                        <img className="w-8 h-8" src="/farmers/female.svg" alt="female" />
                        <div className="flex gap-2">
                            <img className="animalIcon" src="/farmers/pig.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/pig.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/pig.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/pig.svg" alt="rabbit" />
                        </div>
                    </div>
                </div>            
            </div>
            <div className="flex flex-col gap-3 bg-grey-300 p-5 rounded-xl border border-grey-200">
                <div className="flex flex-row gap-4 items-baseline">
                    <h3 className="text-2xl font-semibold">Cow</h3>
                    <div>x <span id="player1Cow" className="text-xl">12</span></div>
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="flex gap-2 items-center">
                        <img className="w-8 h-8" src="/farmers/male.svg" alt="male" />
                        <div className="flex gap-2">
                            <img className="animalIcon" src="/farmers/cow.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/cow.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/cow.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/cow.svg" alt="rabbit" />
                        </div>
                    </div>
                    <div className="flex w-full h-[2px] bg-grey-200"/>
                    <div className="flex gap-2 items-center">
                        <img className="w-8 h-8" src="/farmers/female.svg" alt="female" />
                        <div className="flex gap-2">
                            <img className="animalIcon" src="/farmers/cow.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/cow.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/cow.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/cow.svg" alt="rabbit" />
                        </div>
                    </div>
                </div>            
            </div>
             <div className="flex flex-col gap-3 bg-grey-300 p-5 rounded-xl border border-grey-200">
                <div className="flex flex-row gap-4 items-baseline">
                    <h3 className="text-2xl font-semibold">Small Dog</h3>
                    <div>x <span id="player1Cow" className="text-xl">4</span></div>
                </div>
                <div className="flex gap-2">
                            <img className="animalIcon" src="/farmers/dog_small.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/dog_small.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/dog_small.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/dog_small.svg" alt="rabbit" />
                        </div>      
            </div>
            <div className="flex flex-col gap-3 bg-grey-300 p-5 rounded-xl border border-grey-200">
                <div className="flex flex-row gap-4 items-baseline">
                    <h3 className="text-2xl font-semibold">Big Dog</h3>
                    <div>x <span id="player1Cow" className="text-xl">2</span></div>
                </div>
                <div className="flex gap-2">
                            <img className="animalIcon" src="/farmers/dog_big.svg" alt="rabbit" />
                            <img className="animalIcon" src="/farmers/dog_big.svg" alt="rabbit" />

                        </div>      
            </div>
            

            
           
        </div>
      </div>

      <div>
        
        <div className="mt-12 flex flex-col gap-3 bg-grey-400 border p-5 border-grey-200 rounded-2xl items-start">
            <h2>Exchange</h2>
            <div className="p-5 flex gap-3 items-center bg-grey-300 rounded-xl">
            <Button variant={"outline"}>1 <img className="w-8 h-8" src="/farmers/sheep.svg" alt="sheep" /></Button>
            <span className="text-3xl">=</span>
            <Button variant={"outline"}>6 <img className="w-8 h-8" src="/farmers/rabbit.svg" alt="rabbit" /></Button>
        </div>
        <div className="p-5 flex gap-3 items-center bg-grey-300 rounded-xl">
            <Button variant={"outline"}>1 <img className="w-8 h-8" src="/farmers/pig.svg" alt="pig" /></Button>
            <span className="text-3xl">=</span>
            <Button variant={"outline"}>2 <img className="w-8 h-8" src="/farmers/sheep.svg" alt="sheep" /></Button>
        </div>
        <div className="p-5 flex gap-3 items-center bg-grey-300 rounded-xl">
           <Button variant={"outline"}>1 <img className="w-8 h-8" src="/farmers/cow.svg" alt="cow" /></Button>
            <span className="text-3xl">=</span>
            <Button variant={"outline"}>3 <img className="w-8 h-8" src="/farmers/pig.svg" alt="pig" /></Button>
        </div>
        <div className="p-5 flex gap-3 items-center bg-grey-300 rounded-xl">
            <Button variant={"outline"}>1 <img className="w-8 h-8" src="/farmers/horse.svg" alt="horse" /></Button>
            <span className="text-3xl">=</span>
            <Button variant={"outline"}>2 <img className="w-8 h-8" src="/farmers/cow.svg" alt="cow" /></Button>
        </div>
        <div className="p-5 flex gap-3 items-center bg-grey-300 rounded-xl">
            <Button variant={"outline"}>1 <img className="w-8 h-8" src="/farmers/dog_small.svg" alt="dog_small" /></Button>
            <span className="text-3xl">=</span>
            <Button variant={"outline"}>1 <img className="w-8 h-8" src="/farmers/sheep.svg" alt="sheep" /></Button>
        </div>
        <div className="p-5 flex gap-3 items-center bg-grey-300 rounded-xl">
            <Button variant={"outline"}>1 <img className="w-8 h-8" src="/farmers/dog_big.svg" alt="dog_big" /></Button>
            <span className="text-3xl">=</span>
            <Button variant={"outline"}>1 <img className="w-8 h-8" src="/farmers/cow.svg" alt="cow" /></Button>
        </div>
        </div>
       
        
        
      </div>
      
    </div>
      
    </div>
}

