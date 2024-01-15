'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
	syntax in order to get the data from the public API. Errors (HTTP or network 
	errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
	public API and populate the `<select>` element in the DOM.
	
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
	`<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
	function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('HTTP error! status: ${response.status}');
  } else {
    return response.json();
  }
}

function fetchAndPopulatePokemons(data) {
  const select = document.createElement('select');
  select.setAttribute('id', 'pokemon-selector');
  const pokemonList = data.results;
  pokemonList.forEach((pokemon) => {
    const option = document.createElement('option');
    option.setAttribute('value', pokemon.name);
    option.textContent = pokemon.name;
    select.appendChild(option);
  });
  document.body.appendChild(select);
  select.addEventListener('change', (event) => {
    fetchImage(event.target.value);
  });
}

async function fetchImage(pokemonName) {
  try {
    const data = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (document.getElementById('pokemon-img'))
      document.getElementById('pokemon-img').remove();
    const img = document.createElement('img');
    img.setAttribute('id', 'pokemon-img');
    img.setAttribute('alt', pokemonName);
    img.setAttribute('src', data.sprites.front_default);
    document.body.appendChild(img);
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  try {
    const btn = document.createElement('button');
    btn.setAttribute('id', 'btn');
    btn.setAttribute('type', 'button');
    btn.textContent = 'load pokemons';
    document.body.appendChild(btn);
    btn.addEventListener('click', async () => {
      const data = await fetchData(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      console.log(data);
      fetchAndPopulatePokemons(data);
    });
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
