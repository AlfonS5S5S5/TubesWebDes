import { characters, getCharacter, getPickedCharacter, setPickedCharacter } from "./characters.js";

let html = ``;

//untuk setiap character, dibuat section dan dimasukan ke variable html
characters.forEach((character) => {
  html += `
  <section data-name="${character.name}">
    <img src=${character.profileSRC} class="profile">
    <p>${character.name}</p>
  </section>
  `;
});

//menambahkan section-section tadi ke <main> di character.html
document.querySelector("main").innerHTML = html;

//menambahkan event listener untuk setiap section
document.querySelectorAll('section')
  .forEach((section) => {
    section.addEventListener('click', () => {
      const name = section.dataset.name; //mengambil nama character yang ada di section sebagai dataset saat section diclick
      const character = getCharacter(name); //mendapatkan object/character yang sesuai dengan nama yang diambil
      setPickedCharacter(character); //menjalankan function untuk set character yang diclick di variable (pickedCharacter) 
      console.log(character); //pengecekan untuk developer
      window.open("character-details.html", '_self'); //membuka character-details.html
    });
  });

