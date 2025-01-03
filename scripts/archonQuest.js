document.addEventListener("DOMContentLoaded", () => {
    const regionSynopses = {
      monstadt: {
        synopsis : "Mondstadt is a city of freedom, known for its beautiful landscapes and music. As the home of the Anemo Archon, Barbatos. Barbatos is the god of freedom, and he is the Archon of Mondstadt. Known for his laid-back and carefree nature, Barbatos values the freedom of the people of Mondstadt above all else. He seeks to protect them from oppression, and his influence is evident in the city’s culture of liberty and independence. Barbatos is often depicted as a wandering spirit, allowing Mondstadt's people to live without rigid laws or rules.",
        bgImage : "../images/regions/monstadt.jpg"
      },
      liyue: {
        synopsis : "Liyue is a city based on contracts and commerce, led by the Geo Archon, Morax. Morax, also known as Rex Lapis, is the Geo Archon of Liyue. He is the god of contracts, commerce, and stability. Morax has a long history of guiding Liyue, ensuring that trade and business thrive, while also maintaining balance through the contracts that bind people to one another. A god of immense power and wisdom, Morax believes in the importance of structure and the preservation of Liyue's ancient traditions.",
        bgImage : "../images/regions/liyue.png"
      },
      inazuma: {
        synopsis : "Inazuma is a land ruled by the Electro Archon, Raiden Shogun, who seeks to enforce the vision of eternity, is a god that has a deep desire to enforce her vision of an unchanging, perfect world. She is both the ruler of Inazuma and a vessel for the Electro Archon. Her rule is characterized by isolation and strict control, with her Vision Hunt Decree seeking to seize the Visions from her people, believing that it would bring eternal stability to Inazuma.",
        bgImage : "../images/regions/inazuma.jpg"
      },
      sumeru: {
        synopsis : "Sumeru is known for its pursuit of wisdom, and it is ruled by the Dendro Archon, Lesser Lord Kusanali, a land of knowledge and wisdom. She is known as the God of Wisdom and embodies the pursuit of knowledge and enlightenment. Kusanali is depicted as young and kind-hearted, but her power and influence are still emerging as she navigates the complex political and intellectual landscape of Sumeru, a region focused on academia and discovery.",
        bgImage : "../images/regions/sumeru.jpg"
      },
      fontaine: {
        synopsis : "Fontaine is a region centered on justice, where the Hydro Archon governs. This city is known for its elaborate legal system, which is designed to be just and fair, and it is constantly seeking the truth. The people of Fontaine are deeply concerned with the concept of justice, and it is often seen as a beacon of hope for the oppressed.",
        bgImage : "../images/regions/fontaine.jpg"
      }
    };
  
    function displayRegionSynopsis(regionId) {
        const synopsisContainer = document.getElementById("synopsis-container");
    
        synopsisContainer.innerHTML = "";
    
        const regionData = regionSynopses[regionId];
    
        if (regionData) {
          synopsisContainer.innerHTML = `<h3>Synopsis for ${regionId.charAt(0).toUpperCase() + regionId.slice(1)}</h3><p>${regionData.synopsis}</p>`;
    
          document.body.style.backgroundImage = `url(${regionData.bgImage})`;
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
          document.body.style.backgroundAttachment = "fixed";
        } else {
          synopsisContainer.innerHTML = `<p>No synopsis available for this region.</p>`;
        }
      }
  
    document.querySelectorAll('.region').forEach(region => {
      region.addEventListener('click', () => {
        const regionId = region.getAttribute('data-id');
        displayRegionSynopsis(regionId);
      });
    });
  });
  
  document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.style.position = "absolute";
    trail.style.width = "15px";
    trail.style.height = "15px";
    trail.style.borderRadius = "50%";
    trail.style.background = `radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(0, 191, 255, 0.2))`;
    trail.style.boxShadow = "0 0 10px rgba(0, 191, 255, 0.8)";
    trail.style.top = `${e.pageY}px`;
    trail.style.left = `${e.pageX}px`;
    trail.style.pointerEvents = "none";
    trail.style.opacity = "0.9";
    trail.style.transition = "opacity 1s, transform 1s";
    trail.style.transform = "translate(-50%, -50%) scale(0)";
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = "0";
        trail.style.transform = "translate(-50%, -50%) scale(2)";
    }, 0);

    setTimeout(() => {
        trail.remove();
    }, 1000);
});