async function fetchPokemonData(pokemonName) {
    try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    if (!response.ok) throw new Error("Pokémon not found");
    let pokemonData = await response.json();
    
    
        return pokemonData;  
    } catch (error) {  
        console.error(error);  
        return null;  
    }  
    }
    
    
    document.addEventListener("DOMContentLoaded", () => {
    let inputElement = document.getElementById("pokemon");
    let pokemonInfoElement = document.getElementById("pokemon-info");
    let searchButton = document.getElementById("fetch-btn");
    
    
    searchButton.addEventListener("click", async () => {  
        let pokemonName = inputElement.value.trim();  
        if (!pokemonName) {  
            pokemonInfoElement.innerHTML = "<p>Please enter a Pokémon name.</p>";  
            return;  
        }
    
        let pokemonData = await fetchPokemonData(pokemonName);  
        if (!pokemonData) {  
            pokemonInfoElement.innerHTML = "<p>Pokémon not found. Please try again.</p>";  
            return;  
        }
    
        pokemonInfoElement.innerHTML = `  
            <h2>${pokemonData.name}</h2>  
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">  
            <h3>Abilities:</h3>  
            <ul>  
                ${pokemonData.abilities.map(ability => `<li>${[ability.ability.name](`http://ability.ability.name`)}</li>`).join('')}  
            </ul>  
            <h3>Base Experience:</h3>  
            <p>${pokemonData.base_experience}</p>  
        `;  
    });  
    });