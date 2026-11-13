function adjacencyListToMatrix (adjObj) {
  const totalNodes = Object.keys(adjObj).length;
  let matrixArr = [];
  for (let i = 0; i < totalNodes; i++) {
    const neighbors = adjObj[i];
    let nodeArr = new Array(totalNodes).fill(0);
    for (let j = 0; j < neighbors.length; j++) {
      const neighborIndex = neighbors[j];
      nodeArr[neighborIndex] = 1;
    }
    matrixArr.push(nodeArr);
  }
  matrixArr.forEach((nodes) => {
    console.log(nodes);
  })
  return matrixArr;
}

console.log(adjacencyListToMatrix({0: [1, 2], 1: [2], 2: [0, 3], 3: [2]}));
