const generateElement = () => {
  const result = Math.floor(Math.random() * 100) + 1;
  return result;
}

console.log(generateElement());

const generateArray = () => {
  const arr = new Array(5).fill(null);
  return arr.map(() => generateElement());
}

console.log(generateArray());

const generateContainer = () => {
  return document.createElement("div");
}

const fillArrContainer = (el, arr) => {
  el.innerHTML = "";
  arr.forEach(num => {
    const span = document.createElement("span");
    span.textContent = num;
    el.appendChild(span);
  });
}

const isOrdered = (num1, num2) => {
  let result = true;
  if (num1 > num2) {
    result = false;
  }
  return result;
}

const swapElements = (arr, index) => {
  if (arr[index] > arr[index + 1]) {
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
  }
  return arr;
}

const highlightCurrentEls = (el, index) => {
  const children = el.children;
  if (children[index]) {
    children[index].style.border = "2px dashed red";
    children[index].style.borderRadius = "4px";
  }
  if (children[index + 1]) {
    children[index + 1].style.border = "2px dashed red";
    children[index + 1].style.borderRadius = "4px";
  }
}

const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const arrayContainer = document.getElementById("array-container");
const startingArr = document.getElementById("starting-array");

let currentArray = [];

generateBtn.addEventListener("click", () => {
  sortBtn.style.display = "inline";
  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArr);
  currentArray = generateArray();
  fillArrContainer(startingArr, currentArray);
})

sortBtn.addEventListener("click", () => {
  if (currentArray.length === 0) return;
  let arrCopy = [...currentArray];
  let steps = [];
  let swapped = true;
  do {
    swapped = false;
    for (let i = 0; i < arrCopy.length - 1; i++) {
      steps.push({arr: [...arrCopy], index: i});
      if (!isOrdered(arrCopy[i], arrCopy[i + 1])) {
        swapElements(arrCopy, i);
        swapped = true;
      }
    }
  } while (swapped);

  steps.push({arr: [...arrCopy], index: null});
  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArr);
  fillArrContainer(startingArr, steps[0].arr);
  highlightCurrentEls(startingArr, steps[0].index);

  steps.forEach((step, index) => {
    if (index === 0) return;
    const stepDiv = generateContainer();
    fillArrContainer(stepDiv, step.arr);
    if (step.index !== null) {
      highlightCurrentEls(stepDiv, step.index);
    }
    arrayContainer.appendChild(stepDiv);
  })
})