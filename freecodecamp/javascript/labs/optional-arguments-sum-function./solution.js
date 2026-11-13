function addTogether (num1, num2) {
  if (typeof num1 !== "number") return undefined;

  if (arguments.length < 2) {
    return (nextNum) => typeof nextNum === "number" ? num1 + nextNum : undefined;
  }

  if (typeof num2 !== "number") return undefined;

  return num1 + num2;
}
