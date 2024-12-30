export function getCharacter(characterName) {
  let matchingCharacter;

  characters.forEach((character) => {
    if (character.name === characterName) {
      matchingCharacter = character;
    }
  });

  return matchingCharacter;
}

export const characters = [
  {
    name : "Raiden Shogun",
    element: "Electro",
    constellation: "Imperatrix Umbrosa",
    birthday: "6/26",
    affiliation: "Inazuma City",
    description: "Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.",
    profileSRC : "../images/profile/raiden-profile.jpg",
    bannerSRC : "../images/banner/raiden-banner.jpg",
    weaponSRC : "../images/weapon/engulfing-lightning.png"
  },
  {
    name : "Furina",
    element: "Hydro",
    constellation: "Animula Choragi",
    birthday: "10/13",
    affiliation: "Court of Fontaine",
    description: "The absolute focus of the stage of judgement, until the final applause sounds.",
    profileSRC : "../images/profile/furina-profile.jpg",
    bannerSRC : "../images/banner/furina-banner.jpg",
    weaponSRC : "../images/weapon/splendor-of-tranquil-waters.jpg"
  }, 
  {
    name : "Nahida",
    element: "Dendro",
    profileSRC : "../images/profile/nahida-profile.jpg"
    
  }
];

let pickedCharacter;

export function loadFromStorage() {
  pickedCharacter = JSON.parse(localStorage.getItem('pickedCharacter'));
  if(!pickedCharacter) {
    pickedCharacter = {
      name : "Raiden Shogun",
      element: "Electro",
      constellation: "Imperatrix Umbrosa",
      birthday: "6/26",
      affiliation: "Inazuma City",
      description: "Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.",
      profileSRC : "images/profile/raiden-profile.jpg",
      bannerSRC : "../images/banner/raiden-banner.jpg",
      weaponSRC : "../images/weapon/engulfing-lightning.png"
    };
  }
}

function saveToStorage() {
  localStorage.setItem('pickedCharacter', JSON.stringify(pickedCharacter));
}

export function setPickedCharacter(character) {
  pickedCharacter = character;
  saveToStorage()
}

export function getPickedCharacter() {
  loadFromStorage();
  return pickedCharacter;
}
