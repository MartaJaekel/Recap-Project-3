import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

/* const renderCharacters = (results) => {
  cardContainer.innerHTML = "";
}; */

function renderCharacters(results) {
  cardContainer.innerHTML = "";
  results.forEach((character) => {
    const card = CharacterCard(
      character.image,
      character.name,
      character.status,
      character.type,
      character.id
    );
    cardContainer.append(card);
  });
}

async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  renderCharacters(data.results);
}
fetchCharacters();
