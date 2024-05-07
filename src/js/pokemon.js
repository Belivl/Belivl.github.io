



// const getPokemonData = async () => {
//   try {
//     // Fetch data for the first 150 Pokemon
//     for (let i = 1; i <= 3; i++) {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//       const data = await response.json();

//       // Extract the data you're interested in
//       const pokemonData = {
//         index: data.id,
//         name: data.name,
//         abilities: data.abilities.map(ability => ability.ability.name),
//         imageUrl: data.sprites.front_default,
//         types: data.types.map(type => type.type.name),
//         // Fetching natures would require another API call, so we'll leave it out for now
//       };

//       // Log the extracted data to the console
//       console.log(JSON.stringify(pokemonData));
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// };

// getPokemonData();



// Nature data
const natures = [
  { name: "Adamant", increasedStat: "atk", decreasedStat: "spAtk" },
  { name: "Modest", increasedStat: "spAtk", decreasedStat: "atk" },
  // Add more natures here...
];

// Function to get a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}


// Function to fetch Pokémon data from PokéAPI
async function fetchPokemonData(species) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${species.toLowerCase()}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return {
      species: data.name,
      pokedexNumber: data.id,
      types: data.types.map(type => type.type.name),
      baseStats: {
        hp: data.stats[0].base_stat,
        atk: data.stats[1].base_stat,
        def: data.stats[2].base_stat,
        spAtk: data.stats[3].base_stat,
        spDef: data.stats[4].base_stat,
        speed: data.stats[5].base_stat
      },
      imageUrl: data.sprites.front_default
    };
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
  }
}

// Function to generate a random Pokémon with fetched data
async function generateRandomPokemon(species) {
  const pokemonData = await fetchPokemonData(species);
  const ivs = {
    hp: Math.floor(Math.random() * 31),
    atk: Math.floor(Math.random() * 31),
    def: Math.floor(Math.random() * 31),
    spAtk: Math.floor(Math.random() * 31),
    spDef: Math.floor(Math.random() * 31),
    speed: Math.floor(Math.random() * 31)
  };
  const nature = getRandomElement(natures);
  // For simplicity, assuming a default ability for now
  const ability = "Overgrow";
  // For simplicity, assuming a default male ratio for now
  const isMale = Math.random() < 0.5;
  return { 
    species: pokemonData.species, 
    pokedexNumber: pokemonData.pokedexNumber,
    types: pokemonData.types, 
    baseStats: pokemonData.baseStats, 
    ivs, 
    nature, 
    ability,
    isMale,
    imageUrl: pokemonData.imageUrl
  };
}

// Function to breed two Pokémon and produce an egg
async function breedPokemons(parent1, parent2) {
  const offspring = await generateRandomPokemon(parent1.species); // In reality, you'd calculate offspring stats/nature/ability
  return offspring;
}

// Function to handle button click event
document.getElementById("breedButton").addEventListener("click", async () => {
  // Generate random parents
  const parent1 = await generateRandomPokemon("bulbasaur"); // Replace with any Pokémon species
  const parent2 = await generateRandomPokemon("charmander"); // Replace with any Pokémon species

  // Display parents
  displayPokemon(parent1, "parent1");
  displayPokemon(parent2, "parent2");

 // Display egg
  const eggContainer = document.getElementById("egg");
  eggContainer.innerHTML = `
    <img src="/egg.png" alt="Egg" id="eggImg">
    <div id="eggCrack"></div>
  `;
  // Simulate egg shaking
  const eggImg = document.getElementById("eggImg");
  eggImg.style.animation = "shakeAnimation 0.5s ease-in-out infinite";


 // After 5 minutes, simulate cracking the egg
  setTimeout(async () => {
    // Crack the egg
    document.getElementById("eggCrack").style.display = "block";
    // Wait for the crack animation to finish
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Hatch the egg
    const hatchedPokemon = await generateRandomPokemon("squirtle"); // Replace with any Pokémon species
    // Display hatched Pokémon
    displayPokemon(hatchedPokemon, "hatchedPokemon");
  }, 30000); // 5 minutes in milliseconds

  // Start the egg shaking animation
  startShakingAnimation(30000); // Pass the hatching time in milliseconds
});
function startShakingAnimation(hatchingTime) {
  const eggImg = document.getElementById("eggImg");
  let currentTime = 0;
  let shakeInterval;

  function shakeEgg() {
    eggImg.style.animation = "shakeAnimation 0.5s ease-in-out infinite";
    shakeInterval = setInterval(() => {
      currentTime += 1000;
      if (currentTime >= hatchingTime - 60000) { // When it's within 1 minute of hatching
        clearInterval(shakeInterval); // Stop the current interval
        eggImg.style.animation = "shakeAnimation 0.2s ease-in-out infinite"; // Increase shaking frequency
        shakeInterval = setInterval(() => {
          currentTime += 1000;
          if (currentTime >= hatchingTime) {
            clearInterval(shakeInterval);
            eggImg.style.animation = "none"; // Stop shaking when hatching
          }
        }, 200); // Adjust the shaking frequency as needed
      }
    }, 1000);
  }

  setTimeout(() => {
    clearInterval(shakeInterval);
    eggImg.style.animation = "none"; // Stop shaking when hatching
  }, hatchingTime);
  
  shakeEgg();
}

// Function to display a Pokémon
function displayPokemon(pokemon, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <img src="${pokemon.imageUrl}" alt="${pokemon.species}">
    <p>Name: ${pokemon.species}</p>
    <p>Pokedex Number: ${pokemon.pokedexNumber}</p>
    <p>Types: ${pokemon.types.join(", ")}</p>
    <p>Base Stats: HP: ${pokemon.baseStats.hp}, Atk: ${pokemon.baseStats.atk}, Def: ${pokemon.baseStats.def}, Sp. Atk: ${pokemon.baseStats.spAtk}, Sp. Def: ${pokemon.baseStats.spDef}, Speed: ${pokemon.baseStats.speed}</p>
    <p>IVs: HP: ${pokemon.ivs.hp}, Atk: ${pokemon.ivs.atk}, Def: ${pokemon.ivs.def}, Sp. Atk: ${pokemon.ivs.spAtk}, Sp. Def: ${pokemon.ivs.spDef}, Speed: ${pokemon.ivs.speed}</p>
    <p>Nature: ${pokemon.nature.name}</p>
    <p>Ability: ${pokemon.ability}</p>
    <p>Gender: ${pokemon.isMale ? "Male" : "Female"}</p>
  `;
}
