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
    name : "Albedo",
    element: "Geo",
    constellation: "Princeps Cretaceus",
    birthday: "9/13",
    affiliation: "Knights of Favonius",
    description: "A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
    profileSRC : "../images/profile/albedo-profile.jpg",
    bannerSRC : "../images/banner/albedo-banner.jpg",
    weaponSRC : "../images/weapon/cinnabar-spindle.jpg"
  },
  {
    name : "Alhaitham",
    element: "Dendro",
    constellation: "Vultur Volans",
    birthday: "2/11",
    affiliation: "Sumeru Akademiya",
    description: "The current scribe of the Sumeru Akademiya, a man endowed with extraordinary intelligence and talent. He lives free -- free from the searching eyes of ordinary poeple, anyway.",
    profileSRC : "../images/profile/alhaitham-profile.jpg",
    bannerSRC : "../images/banner/alhaitham-banner.jpg",
    weaponSRC : "../images/weapon/light-of-foliar-incision.jpg"
  },
  {
    name : "Arataki Itto",
    element: "Geo",
    constellation: "Taurus Iracundus",
    birthday: "6/1",
    affiliation: "Arataki Gang",
    description: "The first and greatest head of the Arataki Gang, famed throughout Inazuma City's Hanamizaka... Wait, what? You've never heard of them? Are you trying to be funny here?",
    profileSRC : "../images/profile/arataki-itto-profile.jpg",
    bannerSRC : "../images/banner/arataki-itto-banner.jpg",
    weaponSRC : "../images/weapon/redhorn-stonethresher.jpg"
  },
  {
    name : "Arlecchino",
    element: "Pyro",
    constellation: "Ignis Purgatorius",
    birthday: "8/22",
    affiliation: "Fatui",
    description: `"The Knave," Fourth of the Fatui Harbringers. A poised, ruthless diplomat. To the children in the House of the Hearth, she is their feared yet dependable "Father."`,
    profileSRC : "../images/profile/arlecchino-profile.jpeg",
    bannerSRC : "../images/banner/arlecchino-banner.jpg",
    weaponSRC : "../images/weapon/crimson-moon's-semblance.jpg"
  },
  {
    name : "Baizhu",
    element: "Dendro",
    constellation: "Lagenaria",
    birthday: "4/25",
    affiliation: "Bubu Pharmacy",
    description: "The owner of Bubu Pharmacy, who is rarely seen without the white snake named Changsheng. His medicinal knowledge is encyclopedic, and his personal intrigues subtle.",
    profileSRC : "../images/profile/baizhu-profile.jpeg",
    bannerSRC : "../images/banner/baizhu-banner.jpg",
    weaponSRC : "../images/weapon/jadefall-splendor.jpg"
  },
  {
    name : "Chasca",
    element: "Anemo",
    constellation: "Vultur Gryphus",
    birthday: "12/10",
    affiliation: "Tlalocan",
    description: "The Peacemaker of the Tlalocan, the ender of all disputes.",
    profileSRC : "../images/profile/chasca-profile.jpeg",
    bannerSRC : "../images/banner/chasca-banner.jpg",
    weaponSRC : "../images/weapon/astral-vulture's-crimson-plumage.jpg"
  },
  {
    name : "Chiori",
    element: "Geo",
    constellation: "Cisoria",
    birthday: "8/17",
    affiliation: "Court of Fontaine",
    description: "The owner of Chioriya Boutique. A tailor renowned throughout Fontaine.",
    profileSRC : "../images/profile/chiori-profile.jpg",
    bannerSRC : "../images/banner/chiori-banner.jpg",
    weaponSRC : "../images/weapon/uraku-misigiri.jpg"
  },
  {
    name : "Citlali",
    element: "Cryo",
    constellation: "Patina Anavatlaca",
    birthday: "1/20",
    affiliation: "Mictlan",
    description: "The great shaman from the Masters of the Night-Wind, the universally-revered Granny Itztli.",
    profileSRC : "../images/profile/citlali-profile.jpeg",
    bannerSRC : "../images/banner/citlali-banner.jpg",
    weaponSRC : "../images/weapon/starcaller's-watch.jpg"
  },
  {
    name : "Clorinde",
    element: "Electro",
    constellation: "Rapperia",
    birthday: "9/20",
    affiliation: "Trial Court",
    description: "An undefeated Champion Duelist. Sword in hand, she defends justice in the Court of Fontaine.",
    profileSRC : "../images/profile/clorinde-profile.jpeg",
    bannerSRC : "../images/banner/clorinde-banner.jpg",
    weaponSRC : "../images/weapon/absolution.jpg"
  },
  {
    name : "Cyno",
    element: "Electro",
    constellation: "Lupus Aureus",
    birthday: "6/23",
    affiliation: "Temple of Silence",
    description: `The General Mahamatra in charge of supervising the researchers of the Akademiya. It is said that when he gets down to work, the General Mahamatra is even more efficient than the "Great Vayuvyastra" made by the Kshahrewar.`,
    profileSRC : "../images/profile/cyno-profile.jpg",
    bannerSRC : "../images/banner/cyno-banner.jpg",
    weaponSRC : "../images/weapon/staff-of-the-scarlet-sands.jpg"
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
    name : "Ganyu",
    element: "Cryo",
    constellation: "Sinae Unicornis",
    birthday: "12/2",
    affiliation: "Yehai Pavilion",
    description: "The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.",
    profileSRC : "../images/profile/ganyu-profile.jpeg",
    bannerSRC : "../images/banner/ganyu-banner.jpg",
    weaponSRC : "../images/weapon/amos-bow.jpg"
  },
  {
    name : "Hu Tao",
    element: "Pyro",
    constellation: "Papilio Charontis",
    birthday: "7/15",
    affiliation: "Wangsheng Funeral Parlor",
    description: "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
    profileSRC : "../images/profile/hu-tao-profile.jpeg",
    bannerSRC : "../images/banner/hu-tao-banner.jpg",
    weaponSRC : "../images/weapon/staff-of-homa.jpg"
  },
  {
    name : "Kaedahara Kazuha",
    element: "Anemo",
    constellation: "Acer Palmatum",
    birthday: "10/29",
    affiliation: "The Crux",
    description: "A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past.",
    profileSRC : "../images/profile/kazuha-profile.jpeg",
    bannerSRC : "../images/banner/kazuha-banner.jpg",
    weaponSRC : "../images/weapon/freedom-sworn.jpg"
  },
  {
    name : "Kamisato Ayaka",
    element: "Cryo",
    constellation: "Grus Nivis",
    birthday: "9/28",
    affiliation: "Yashiro Commission",
    description: "Daughter of the Yashiro Commission's Kamisato Clan. Dignified and elegant, as well as wise and strong.",
    profileSRC : "../images/profile/ayaka-profile.jpeg",
    bannerSRC : "../images/banner/ayaka-banner.jpg",
    weaponSRC : "../images/weapon/mistsplitter-reforged.jpg"
  },
  {
    name : "Kamisato Ayato",
    element: "Hydro",
    constellation: "Cypressus Custos",
    birthday: "3/26",
    affiliation: "Yashiro Commission",
    description: "The young but highly accomplished head of the Yashiros Commission's Kamisato Clan. Cultured and polite, he is a man of many ways and means.",
    profileSRC : "../images/profile/ayato-profile.jpeg",
    bannerSRC : "../images/banner/ayato-banner.jpg",
    weaponSRC : "../images/weapon/haran-gappaku-futsu.jpg"
  },
  {
    name : "Kinich",
    element: "Dendro",
    constellation: "Chimaera Alebriius",
    birthday: "11/11",
    affiliation: "Huitztlan",
    description: "A Huitztlan Saurian Hunter skilled at counting costs.",
    profileSRC : "../images/profile/kinich-profile.jpeg",
    bannerSRC : "../images/banner/kinich-banner.jpg",
    weaponSRC : "../images/weapon/fang-of-the-mountain-king.jpg"
  },
  {
    name : "Lyney",
    element: "Pyro",
    constellation: "Felis Fuscus",
    birthday: "2/2",
    affiliation: "Hotel Bouffes d'ete",
    description: "A famed Fontainian magician who possesses great stage presence as well as gift of the gab. Audiences are enthralled by his exquisite skills, and they hang on to his every clever word.",
    profileSRC : "../images/profile/lyney-profile.jpeg",
    bannerSRC : "../images/banner/lyney-banner.jpg",
    weaponSRC : "../images/weapon/the-first-great-magic.jpg"
  },
  {
    name : "Mavuika",
    element: "Pyro",
    constellation: "Sol Invictus",
    birthday: "8/28",
    affiliation: "Huitztlan",
    description: `The leader of Natlan who inherited the Ancient Name of "Kiongozi." She made a vow to illuminate the future of the nation of war with the Sacred Flame.`,
    profileSRC : "../images/profile/mavuika-profile.jpeg",
    bannerSRC : "../images/banner/mavuika-banner.jpg",
    weaponSRC : "../images/weapon/a-thousand-blazing-stars.jpg"
  },
  {
    name : "Mualani",
    element: "Hydro",
    constellation: "Phoca Neomonachus",
    birthday: "8/3",
    affiliation: "Meztli",
    description: "A well-known guide in Natlan who owns a watersport shop, and expert in all forms of wave-chasing.",
    profileSRC : "../images/profile/mualani-profile.jpeg",
    bannerSRC : "../images/banner/mualani-banner.jpg",
    weaponSRC : "../images/weapon/surf's-up.jpg"
  },
  {
    name : "Nahida",
    element: "Dendro",
    constellation: "Sapientia Oromasdis",
    birthday: "10/27",
    affiliation: "Sumeru City",
    description: "A caged bird secluded within the confines of the Sanctuary of Surasthana who can only see the world in her dreams.",
    profileSRC : "../images/profile/nahida-profile.jpg",
    bannerSRC : "../images/banner/nahida-banner.jpg",
    weaponSRC : "../images/weapon/a-thousand-floating-dreams.jpg"
  },
  {
    name : "Navia",
    element: "Geo",
    constellation: "Rosa Multiflora",
    birthday: "8/16",
    affiliation: "Spina di Rosula",
    description: "The current President of Spina di Rosula, who is lovely, dutiful, and a great boss.",
    profileSRC : "../images/profile/navia-profile.jpeg",
    bannerSRC : "../images/banner/navia-banner.jpg",
    weaponSRC : "../images/weapon/verdict.jpg"
  },
  {
    name : "Neuvillette",
    element: "Hydro",
    constellation: "Leviathan Judicator",
    birthday: "12/18",
    affiliation: "Court of Fontaine",
    description: "The Chief Justice of Fontaine, known as the Iudex, is renowned for his unassailable impartiality.",
    profileSRC : "../images/profile/neuvillette-profile.jpeg",
    bannerSRC : "../images/banner/neuvillette-banner.jpg",
    weaponSRC : "../images/weapon/tome-of-the-eternal-flow.jpg"
  },
  {
    name : "Nilou",
    element: "Hydro",
    constellation: "Lotos Somno",
    birthday: "12/3",
    affiliation: "Zubayr Theater",
    description: "The star of the Zubayr Theater. She is full of warmth and innocence, and her dances are lively and elegant.",
    profileSRC : "../images/profile/nilou-profile.jpeg",
    bannerSRC : "../images/banner/nilou-banner.jpg",
    weaponSRC : "../images/weapon/key-of-khaj-nisut.jpg"
  },
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
    name : "Shenhe",
    element: "Cryo",
    constellation: "Crista Doloris",
    birthday: "3/10",
    affiliation: "Cloud Retainer's Abode",
    description: "An adepti disciple with a most unusual air about her. Having spent much time cultivating in isolation in Liyue's mountains, she has become every bit as cool and distant as the adepti themselves.",
    profileSRC : "../images/profile/shenhe-profile.jpeg",
    bannerSRC : "../images/banner/shenhe-banner.jpg",
    weaponSRC : "../images/weapon/calamity-queller.jpg"
  },
  {
    name : "Sangonomiya Kokomi",
    element: "Hydro",
    constellation: "Dracaena Somnolenta",
    birthday: "2/22",
    affiliation: "Watatsumi Island",
    description: "The Divine Priestess of Watatsumi Island. All of the island's affairs are at this young lady's fingertips.",
    profileSRC : "../images/profile/kokomi-profile.jpeg",
    bannerSRC : "../images/banner/kokomi-banner.jpg",
    weaponSRC : "../images/weapon/everlasting-moonglow.jpg"
  },
  {
    name : "Sigewinne",
    element: "Hydro",
    constellation: "Nereides",
    birthday: "3/30",
    affiliation: "Fortress of Meropide",
    description: "A Melusine and the Fortress of Meropide's head nurse. She cares equally for every convict locked in the undersea prison.",
    profileSRC : "../images/profile/sigewinne-profile.jpeg",
    bannerSRC : "../images/banner/sigewinne-banner.jpg",
    weaponSRC : "../images/weapon/silvershower-heartstrings.jpg"
  },
  {
    name : "Tartaglia",
    element: "Hydro",
    constellation: "Monoceros Caeli",
    birthday: "7/20",
    affiliation: "Fatui",
    description: `No.11 of The Harbingers, also known as "Childe." His name is highly feared on the battlefield.`,
    profileSRC : "../images/profile/tartaglia-profile.jpeg",
    bannerSRC : "../images/banner/tartaglia-banner.jpg",
    weaponSRC : "../images/weapon/polar-star.jpg"
  },
  {
    name : "Wanderer",
    element: "Anemo",
    constellation: "Peregrinus",
    birthday: "1/3",
    affiliation: "None",
    description: "A wayfaring figure whose identity is a mystery. He dresses like a mountain ascetic, but he certainly does not act the part.",
    profileSRC : "../images/profile/wanderer-profile.jpeg",
    bannerSRC : "../images/banner/wanderer-banner.jpg",
    weaponSRC : "../images/weapon/tulaytullah's-remembrance.jpg"
  },
  {
    name : "Wriothesley",
    element: "Cryo",
    constellation: "Cerberus",
    birthday: "11/23",
    affiliation: "Fortress of Meropide",
    description: "Duke of the Fortress of Meropide, Lord Incognito of the murky depths.",
    profileSRC : "../images/profile/wriothesley-profile.jpeg",
    bannerSRC : "../images/banner/wriothesley-banner.jpg",
    weaponSRC : "../images/weapon/cashflow-supervision.jpg"
  },
  {
    name : "Xiao",
    element: "Anemo",
    constellation: "Alatus Nemeseos",
    birthday: "4/17",
    affiliation: "Liyue Adeptus",
    description: `A yaksha adeptus who defends Liyue. Also heralded as the "Conqueror of Demons" and "Vigilant Yaksha."`,
    profileSRC : "../images/profile/xiao-profile.jpeg",
    bannerSRC : "../images/banner/xiao-banner.jpg",
    weaponSRC : "../images/weapon/primordial-jade-winged-spear.jpg"
  },
  {
    name : "Xilonen",
    element: "Geo",
    constellation: "Panthera Ocelota",
    birthday: "3/13",
    affiliation: "Nanatzcayan",
    description: "A Name Engraver of the Nanatzcayan, she is especially skilled at finding a good balance between the heavy responsibilities of her job and living well.",
    profileSRC : "../images/profile/xilonen-profile.jpeg",
    bannerSRC : "../images/banner/xilonen-banner.jpg",
    weaponSRC : "../images/weapon/peak-patrol-song.jpg"
  },
  {
    name : "Yelan",
    element: "Hydro",
    constellation: "Umbrabilis Orchis",
    birthday: "4/20",
    affiliation: "Yanshang Teahouse",
    description: `A mysterious person who claims to work for the Ministry of Civil Affairs, but is a "non-entity" on the Ministry of CIvil Affairs's list.`,
    profileSRC : "../images/profile/yelan-profile.jpeg",
    bannerSRC : "../images/banner/yelan-banner.jpg",
    weaponSRC : "../images/weapon/aqua-simulacra.jpg"
  },
  {
    name : "Yae Miko",
    element: "Electro",
    constellation: "Divina Vulpes",
    birthday: "6/27",
    affiliation: "Grand Narukami Shrine",
    description: "Lady Guuji of the Grand Narukami Shrine. Also serves as the editor-in-chief of Yae Publishing House. Unimaginable intelligence and cunning are hidden under her beautiful appearance.",
    profileSRC : "../images/profile/yae-miko-profile.jpeg",
    bannerSRC : "../images/banner/yae-miko-banner.jpg",
    weaponSRC : "../images/weapon/kagura-verity.jpg"
  },
  {
    name : "Yoimiya",
    element: "Pyro",
    constellation: "Carassius Auratus",
    birthday: "6/21",
    affiliation: "Naganohara Fireworks",
    description: `Owner of Naganohara Fireworks. Known as the "Queen of the Summer Festival," she excels in her craft of creating fireworks that symbolize people's hopes and dreams.`,
    profileSRC : "../images/profile/yoimiya-profile.jpeg",
    bannerSRC : "../images/banner/yoimiya-banner.jpg",
    weaponSRC : "../images/weapon/thundering-pulse.jpg"
  },
  {
    name : "Zhongli",
    element: "Geo",
    constellation: "Lapis Dei",
    birthday: "12/31",
    affiliation: "Liyue Harbor",
    description: "A mysterious expert contracted by the Wansheng Funeral Parlor. Extremely knowledgeable in all things.",
    profileSRC : "../images/profile/zhongli-profile.jpeg",
    bannerSRC : "../images/banner/zhongli-banner.jpg",
    weaponSRC : "../images/weapon/vortex-vanquisher.jpg"
  },
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
