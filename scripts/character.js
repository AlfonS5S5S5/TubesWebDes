import { characters, getCharacter, getPickedCharacter, setPickedCharacter } from "./characters.js";

let html = ``;

characters.forEach((character) => {
  html += `
  <section data-name="${character.name}">
    <img src=${character.profileSRC} class="profile">
    <p>${character.name}</p>
  </section>
  `;
});

document.querySelector("main").innerHTML = html;

document.querySelectorAll('section')
  .forEach((section) => {
    section.addEventListener('click', () => {
      const name = section.dataset.name;
      const character = getCharacter(name);
      setPickedCharacter(character);
      console.log(character);
      window.open("character-details.html");
    });
  });

