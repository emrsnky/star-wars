let characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];
// Sets the number of stars we wish to display
const numStars = 250;
// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  let starContainer = document.getElementById("starContainer");
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + "px";
  star.style.left = xy[1] + "px";
  starContainer.append(star);
}
// Get random x, y values based on the size of the container
function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

const galaxy = document.getElementById("galaxy");
let charactersRendered = false;
const characterRenderButton = document.getElementById("show-more");

// karakterleri gizle\goster -----------------------------------------
function toggleRender() {
  if (charactersRendered) {
    galaxy.innerHTML = "";
    charactersRendered = false;
    characterRenderButton.innerText = "Click to Enter Galactic Age";
    filterCharactersDiv.innerHTML = "";
  } else {
    createFilterButton();
    characters.forEach((character) => {
      galaxy.innerHTML += `
        <div class="col-lg-4 col-sm-6 mb-5" id="filterDiv" data-id="${character.homeworld}">
          <div class="card bg-black text-white border-light" style="width: 18rem;">
            <img src="${character.pic}" class="card-img-top" alt="..." style="height: 350px;">
            <div class="card-body">
              <p class="card-text">${character.name}</p>
              <p class="card-text">${character.homeworld}</p>
            </div>
          </div>
        </div>`;
    });
    charactersRendered = true;
    characterRenderButton.innerText = "Hide Characters";
  }
}

function filter() {
  if (filteredHomeworld != null) {
    document.querySelectorAll("#filterDiv").forEach(function (item) {
      let id = item.getAttribute("data-id").toLowerCase();

      if (id == filteredHomeworld) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
}
//filter button
function createFilterButton() {
  galaxy.innerHTML += `<div class="row-col-lg-4 
  justify-content-center text-center">
  <button
  type="button"
  onclick="updateFilterButtonText()" 
  class="btn btn-outline-light  p-3 mb-5 "
  id="filter-button">
  Filter Characters 
</button> </div>`;
}

//update filter button text and show inputs
let inputsCreated = false;
function updateFilterButtonText() {
  createInput();
  let filterButton = document.getElementById("filter-button");
  let filterCharactersDiv = document.getElementById("filter-characters");
  
  if (filterButton && filterCharactersDiv) {
   
    if (inputsCreated) {
     
      filterCharactersDiv.innerHTML = "";
      // inputsCreated = false;
      if (filterButton.innerText == "Hide Filter") {
        
        filterButton.innerText = "Filter Characters";
      } else {
        
        filterButton.innerText = "Hide Filter ";
        createInput();
      }
    }
  }
}

//create inputs
let filterCharactersDiv = document.getElementById("filter-characters");

function createInput() {
  homeworlds.forEach((homeworld) => {
    filterCharactersDiv.innerHTML += ` <div class="form-check mb-4 col-lg-3">
  <input
    class="form-check-input"
    type="radio"
    name="exampleRadios"
    onClick="filterRenderCard('${homeworld}')"
    id="userInput"
    value="${homeworld}" 
  />
  <label class="form-check-label text-white" for="userInput">
    ${homeworld}
  </label> 
</div>`;
  });
  inputsCreated = true;
}

//filtered homewolds
let filteredHomeworld;
function filterRenderCard(homeworld) {
  filteredHomeworld = homeworld;
  if (filteredHomeworld != null) {
    document.querySelectorAll("#filterDiv").forEach(function (item) {
      let id = item.getAttribute("data-id").toLowerCase();

      if (id == filteredHomeworld) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
}

// delete same values in array

let homeworldRow = characters.map(function (character) {
  let homeworld = character.homeworld ?? "Other";
  return homeworld.toLowerCase();
});

let homeworldsUnique = [...new Set(homeworldRow)];

let homeworlds = homeworldsUnique;

// Hide the first div after 7 seconds
function hideDiv() {
  let div = document.getElementById("first-div");
  if (div) {
    div.style.display = "none";
  }
}

setTimeout(hideDiv, 7000);

// Show the second div after 7.3 seconds
function showSecondDiv() {
  let div = document.getElementById("second-div");
  if (div) {
    div.style.display = "block";
  }
}
setTimeout(showSecondDiv, 7300);
