document.addEventListener("DOMContentLoaded", function () {
  fetchCharacters();
});

function fetchCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      if (!response.ok) {
        switch (response.status) {
          case 400:
            throw new Error("ERROR_400_INVALID");
          case 401:
            throw new Error("ERROR_401_UNAUTHORIZED");
          case 403:
            throw new Error("ERROR_403_FORBIDDEN");
          case 404:
            throw new Error("ERROR_404_NOT_FOUND");
          case 500:
            throw new Error("ERROR_500_INTERNAL_SERVER_ERROR");
          default:
            throw new Error("UNKNOWN_ERROR");
        }
      }
      return response.json();
    })
    .then((data) => displayCharacters(data))
    .catch((error) => console.error("FETCH_ERROR", error));
}

function displayCharacters(data) {
  const charactersList = document.getElementById("characters-list");
  charactersList.innerHTML = "";
  data.results.forEach((character) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${character.name} - ID: ${character.id}`;
    charactersList.appendChild(listItem);
  });
}
