
import {createCub  } from "./createCub.js";
export function createCubes(count, countCubes) {
    let size = countCubes === 0 ? 50 : 50 + countCubes * 10;
    console.log(size);
    const cubes = [];
  
    for (let i = 0; i < count; i++) {
      const elem = createCub(size);
      cubes.push(elem);
      size += 10;
    }
    return cubes;
  }