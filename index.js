const series = [
  {
    name: "Breaking Bad",
    seen: false,
  },
  {
    name: "The Wire",
    seen: true,
  },
];

const seriesContainer = document.querySelector("ul");
const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addSerie(value);
});

const displaySerie = () => {
  const seriesNode = series.map((serie, index) => {
    return createSerie(serie, index);
  });
  seriesContainer.innerHTML = "";
  seriesContainer.append(...seriesNode);
};

function createSerie(serie, index) {
  const liste = document.createElement("li");

  let toggle = true;
  const span = document.createElement("Span");
  span.classList.add("todo");
  if (serie.seen) {
    span.classList.add("done");
  }
  span.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
      span.classList.add("done");
      serie.seen = true;
    } else {
      span.classList.remove("done");
      serie.seen = false;
    }
    console.log(series);
  });

  const parag = document.createElement("p");
  parag.innerText = serie.name;

  const btnEdit = document.createElement("button");
  btnEdit.innerText = "Editer";

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("delete");
  btnDelete.innerText = "Supprimer";
  btnDelete.addEventListener("click", () => {
    deleteSerie(index);
  });

  const btnAjout = document.querySelector(".ajout");

  liste.append(span, parag, btnEdit, btnDelete);

  return liste;
}

const addSerie = (value) => {
  series.push({ name: value, seen: false });
  displaySerie();
};

const deleteSerie = (index) => {
  console.log(index);
  series.splice(index, 1);
  displaySerie();
};

displaySerie();
