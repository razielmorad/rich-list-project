const container = document.getElementById("container");

let crazyRichPeople = [];

let x = 0;

const url = `./vip-list.json`;
const peopleArr = fetch(url)
  .then((response) => response.json())
  .then((peopleList) => {
    peopleList.map((item) => {
      richPeople.push(item);
    });
    showIndIviduals();
  })
  .catch((error) => {
    console.error(error);
  });

let richPeople = [];
console.log(richPeople)

function showIndIviduals() {
  for (let item of richPeople) {
    container.innerHTML += `<div data-person="${item.name}" class="data mx-5 my-2 col-3"> <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${item.worth}</li>
          <li class="list-group-item">${item.source}</li>
        </ul>
      </div> </div>`;
  }
}

container.addEventListener("click", function (e) {
  //mappedARR.filter((item) => {
  if (e.target !== container) {
   const thePerson = e.target.closest(".data").dataset.person
    richPeople =  richPeople.filter(person => person.name !== thePerson)
    renderPeople()
  
  }
});
function renderPeople (){
  container.innerHTML = ""
  for (let item of richPeople) {
    container.innerHTML += `<div data-person="${item.name}" class="data mx-5 my-2 col-3"> <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${item.worth}</li>
          <li class="list-group-item">${item.source}</li>
        </ul>
      </div> </div>`;
  }
}
//});
//console.log(mappedARR);
