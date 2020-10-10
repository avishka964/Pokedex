const p_container = document.getElementById("p_container");
const pokemon_number = 100;

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemon_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

fetchPokemon();

function createPokemonCard(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon");

  const {id, types} = pokemon;

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const type = types[0].type.name;
  const pokeInnerHTML = `
    
    <div class = "img-container" >
    <img src = "https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
    </div>
    <div class = "info">
    <h4>#${id}</h4> 
    <button class = "name">${name}</button><br>
    <small>Type: <span>${type}</span></small>

    </div>    
    `;

  pokemonCard.innerHTML = pokeInnerHTML;
  p_container.appendChild(pokemonCard);
}
