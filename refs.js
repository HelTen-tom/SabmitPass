export const refs = {
  container: document.querySelector(".container"),
  addBtn: document.querySelector(".btn-add"),
  resetBtn: document.querySelector(".btn-reset"),
  countCubes: document.querySelector(".cubes-count"),
};

function addCubes (params) {
    
}

function createCubes() {
 const cube=document.createElement("div");
cube.style.background=generateRandomColor();
cube.style.width=`${size}px`;
cube.style.height=`${size}px`;
return cube;
}
