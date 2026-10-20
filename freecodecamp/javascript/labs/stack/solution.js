const initStack = () => {
  return {
    collection: []
  };
};

const push = (stack, element) => {
  stack.collection.push(element);
};

const pop = (stack, element) => {
  return stack.collection.pop(element);
};

const peek = (stack) => {
  const lastIndex = stack.collection.length - 1;
  return stack.collection[lastIndex];
};

const isEmpty = (stack) => {
  return stack.collection.length === 0;
};

const clear = (stack) => {
  stack.collection = [];
};
