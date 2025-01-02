import { getPickedCharacter } from "./characters.js";

let character = getPickedCharacter();
document.body.style.backgroundImage = `url('../images/background/${character.element}-background.jpg')`;

let characterDetailsHTML = `
        <div class="character-container">
          <img src="${character.bannerSRC}" class="banner">
        </div>

        <div class="details">

          <table>
            <tr><td>Name</td><td>${character.name}</td></tr>
            <tr><td>Birthday</td><td>${character.birthday}</td></tr>
            <tr><td>Affiliation</td><td>${character.affiliation}</td></tr>
            <tr><td>Element</td><td>${character.element}</td></tr>
            <tr><td>Constellation</td><td>${character.constellation}</td></tr>
            <tr><td>Description</td><td>${character.description}</td></tr>
          </table>

        </div>

        <div class="weapon-container">
          <img src="${character.weaponSRC}" class="banner">
        </div>
        
      </div>
      `;
document.querySelector(".container").innerHTML = characterDetailsHTML;
