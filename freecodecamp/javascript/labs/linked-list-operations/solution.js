function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return false;

  if (previous !== null) {
    return true;
  } else {
    return false;
  }
}

function getAt(list, index) {
  if (!list || list.head === null) return undefined;

  let previous = null;
  let current = list.head;

  for (let i = 0; i <= index; i++) {
    if (!current) return undefined;

    previous = current;
    current = current.next;

    if (i === index) {
      return previous.element;
    }
  }
}


function insertAt(list, index, element) {
  if (!list || index < 0) return;

  const newNode = {
    element: element,
    next: null
  };

  if (index === 0) {
    newNode.next = list.head;
    list.head = newNode;
    list.length++;
    return;
  }

  let previous = null;
  let current = list.head;

  for (let i = 0; i <= index; i++) {
    if (current === null && i < index) return;
    
    if (i === index) {
      newNode.next = current;
      previous.next = newNode;
      list.length++;
      return;
    }

    previous = current;
    if (current !== null) {
      current = current.next;
    }
  }
}

function removeAt(list, index) {
  if (!list || index < 0) return;
  if (index >= list.length || list.head === null) return;

  if (index === 0) {
    list.head = list.head.next;
    list.length--;
    return;
  } else if (list.length === 1) {
    list.head = {};
    return;
  }

  let previous = null;
  let current = list.head;

  for (let i = 0; i <= index; i++) {
    if (i === index) {
      previous.next = current.next;
      list.length--;
      return;
    }

    previous = current;
    if (current !== null) {
      current = current.next;
    }
  }
}

function clear(list) {
  list.head = null;
  list.length = 0;
}

const myList = initList();

console.log(`Apakah myList kosong?\nJawaban: ${isEmpty(myList)}`);
add(myList, 42);
add(myList, 43);
add(myList, 44);
add(myList, 45);
add(myList, 46);
console.log(`\nBerikut isi myList setelah ditambah 5 elemen secara berurutan menggunakan add.\n${myList}`);
console.log(`\nApakah myList kosong?\nJawaban: ${isEmpty(myList)}`);
console.log(JSON.stringify(myList, null, 2));
console.log(`\nMelihat nilai elemen pada index tertentu di myList: ${getAt(myList, 3)}`)
insertAt(myList, 3, 44.5);
console.log(`\nmyList ketika ditambahkan elemen bernilai 44.5 pada index ke-3:\n ${JSON.stringify(myList, null, 2)}`);
removeAt(myList, 3);
console.log(`\nmyList ketika dihilangkan elemen bernilai 44.5 pada index ke-3:\n${JSON.stringify(myList, null, 2)}`);
