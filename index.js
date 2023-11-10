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

//Searchbar
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = document.querySelector('[data-js="search-bar__input"]').value;
  fetchCharacters();
});

// States
const maxPage = 42;
let page = 1;
let searchQuery = "";

// Counter Functions
function counter() {
  page++;
  return;
}
function counter1() {
  page--;
  return;
}

//EventListener Button Next und Previous
prevButton.addEventListener("click", () => {
  counter1();

  if (page < 1 || page > 42) {
    console.log("error");
    return;
  }
  fetchCharacters();
  pagination.innerHTML = `${page} / ${maxPage}`;
  return;
});

nextButton.addEventListener("click", () => {
  counter();

  if (page < 1 || page > 42) {
    console.log("error");
    return;
  }

  fetchCharacters();
  pagination.innerHTML = `${page} / ${maxPage}`;
  return;
});

//Render Characters Card

function renderCharacters(results) {
  cardContainer.innerHTML = "";
  results.forEach((character) => {
    const card = CharacterCard(
      character.image,
      character.name,
      character.status,
      character.type,
      character.episode.length
    );
    cardContainer.append(card);
  });
}

//Fetch Function

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  renderCharacters(data.results);
}
fetchCharacters();
