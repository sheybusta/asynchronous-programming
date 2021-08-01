import { origin } from '../origin.js';

/**
 * Returns an array of all Pokemon with a specific ability.
 *
 * @async
 * @param {string} [ability=''] - The ability to request.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const pokemonWithAbility = async (ability = '') => {
  // --- generate and declare your resource's URL ---
  // docs: https://pokeapi.co/docs/v2#abilities
  const URL = `${origin}/ability/${ability}`;


  // --- fetch, validate and parse the API data (this works!) ---
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }
  const data = await response.json();

  // --- process the fetched data (if necessary) ---
  //  you do not need to use `await` below this comment
  //  you can refactor this to a separate logic function and test it
  const pokemon = [];
  data.pokemon.forEach( item => {
 pokemon.push.(data.abilities)
  }
  // --- return the final data ---
  return pokemon;
};
