// const bodyWidth = document.body.clientWidth
// const bodyWidth = document.body.offsetWidth

// Sets the number of stars we wish to display
const numStars = 150;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + "px";
  star.style.left = xy[1] + "px";
  document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

// let data = fetch("https://raw.githubusercontent.com/WildCodeSchool/starwars-api/master/db.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })

// let swCard = document.getElementById("galaxy");

// function createSwCards() {
//   const swCard = document.getElementById("galaxy");
//   fetch(
//     "https://raw.githubusercontent.com/WildCodeSchool/starwars-api/master/db.json"
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       for (user of data.characters) {
//         swCard.innerHTML += `<div class="col-4 mb-5 ">
//         <div class="card bg-black text-white border-light " style="width: 18rem;">
//           <img src="${user.pic}" class="card-img-top" alt="..." style="height: 400px;">
//           <div class="card-body">
//             <p class="card-text " >${user.name}</p>
//             <p class="card-text " >Origin:  ${user.homeworld}</p>
//           </div>
//         </div>
//       </div>`;
//       }
//     });
// }

let swContentCreated = false;

function createSwCards() {
  const swCard = document.getElementById("galaxy");

  if (swContentCreated) {
    swCard.innerHTML = "";
    swContentCreated = false;
    return;
  }

  fetch(
    "https://raw.githubusercontent.com/WildCodeSchool/starwars-api/master/db.json"
  )
    .then((response) => response.json())
    .then((data) => {
      for (user of data.characters) {
        swCard.innerHTML += `<div class="col-lg-4 col-md-6 mb-5 justify-content-center text-center align-items-center ">
          <div class="card bg-black text-white border-light " style="width: 18rem;">
            <img src="${user.pic}" class="card-img-top" alt="${user.name}" style="height: 400px;">
            <div class="card-body">
              <p class="card-text">${user.name}</p>
              <p class="card-text">Origin: ${user.homeworld}</p>
            </div>
          </div>
        </div>`;
      }

      swContentCreated = true;
    });
}

// Hide the first div after 10 seconds
function hideDiv() {
  let div = document.getElementById("first-div");
  if (div) {
    div.style.display = "none";
  }
}

setTimeout(hideDiv, 10000);

// Show the second div after 10 seconds
function showSecondDiv() {
  let div = document.getElementById("second-div");
  if (div) {
    div.style.display = "block";
  }
}
setTimeout(showSecondDiv, 10500);


