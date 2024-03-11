import { generateRandomColor } from "./generateRandomColor.js";
export function createCub(size) {
    const cube = document.createElement("div");
    cube.style.background = generateRandomColor();
    cube.style.width = `${size}px`;
    cube.style.height = `${size}px`;
    return cube;
  }