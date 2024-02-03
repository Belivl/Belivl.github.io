 /*
import imagePathsPortfolio from "js/imagePaths/imagePathsPortfolio.js";
import imagePathsCars from "js/imagePaths/imagePathsCars.js";
*/
      const masonGrid3 = document.querySelector(".masonGrid3");
      let currentColumn = 0;

export function createImageElement(src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = src;
    img.classList.add("image-item3");
    img.style.width = "100%";
    img.style.display = "inline-block";
    return img;
  }
  export function createGrid(path, i){
    const img = createImageElement(path);
        const btn = document.createElement("button");
        btn.appendChild(img);
        btn.classList.add("grid-item");
        btn.id = i.toString();
        masonGrid3?.children[currentColumn].appendChild(btn);
        currentColumn = (currentColumn + 1) % 3;
  }

