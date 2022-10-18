const btnElement = document.getElementById("btn");
const tableCollection = document.getElementsByClassName("table-div");
const gridCollection = document.getElementsByClassName("grid-div");
const mainSection = document.getElementById("main-section-wrapper");
let toggleState = false;
btnElement.onclick = toggleLayout;

function toggleLayout() {
  toggleState = !toggleState;
  if (toggleState) {
    mainSection.className = "main-section-wrapper-grid";
    changeClassInEveryElInCollection(tableCollection, "grid-div");
  } else {
    mainSection.className = "main-section-wrapper-list";
    changeClassInEveryElInCollection(gridCollection, "table-div");
  }
}

function changeClassInEveryElInCollection(collection, className) {
  while (collection.length) {
    collection[0].className = className;
  }
}

// main-section-wrapper -> main-section-wrapper-grid
