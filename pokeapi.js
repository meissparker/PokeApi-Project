async function fetchPokemonData(pokemonName) {
    let pokemonName = document.getElementById('pokemon')
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    let pokemonNameData = await response.json();
    return pokemonNameData;
}

document.addEventListener('DOMContentLoaded', async () => {
    let pokemonNameData = await fetchPokemonData('pokemonName');
    let pokemonNameInfoElement = document.getElementById('pokemon-info');

    pokemonNameInfoElement.innerHTML = `
    <h2>${pokemonNameData.name}</h2>
    <img src="${pokemonNameData.sprites.front_default}" alt="${pokemonData.name}">
    <h3>Abilities:</h3>
    <ul>
    ${pokemonNameData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
    </ul>
    <h3>Base Experiecnce:</h3>
    <p>${pokemonNameData.base_experience}</p>
    `;
});