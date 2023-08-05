function NODE(value, nextNode) {
  return { value, nextNode };
}

class LinkedList {
  constructor() {
    this.list = null;
  }

  prepend(value) {
    this.list = NODE(value, this.list);
  }

  append(value) {
    if (this.list === null) this.prepend(value);
    else {
      let tempList = this.list;
      while (tempList.nextNode != null) {
        tempList = tempList.nextNode;
      }
      tempList.nextNode = NODE(value, null);
    }
  }

  size() {
    let counter = 1;
    let tempList = this.list;
    while (tempList.nextNode != null) {
      tempList = tempList.nextNode;
      counter += 1;
    }
    return counter;
  }

  head() {
    return this.list;
  }

  tail() {
    let tempList = this.list;
    while (tempList.nextNode != null) {
      tempList = tempList.nextNode;
    }
    return tempList;
  }

  at(index) {
    if (index < 0) {
      console.log("index does not exit");
      return;
    }
    let tempList = this.list;
    for (let i = 0; i < index; i += 1) {
      tempList = tempList.nextNode;
      if (tempList === null) {
        console.log("index does not exit");
        return;
      }
    }
    // eslint-disable-next-line consistent-return
    return tempList;
  }

  pop() {
    let cur = this.list;
    let prev = null;
    if (cur.nextNode === null) {
      console.log("your list is now empty");
      this.list = null;
      return;
    }
    while (cur.nextNode != null) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    let tempList = this.list;
    while (tempList != null) {
      if (tempList.value === value) {
        return true;
      }
      tempList = tempList.nextNode;
    }
    return false;
  }

  find(value) {
    let tempList = this.list;
    let counter = 0;
    while (tempList != null) {
      if (value === tempList.value) {
        return counter;
      }
      tempList = tempList.nextNode;
      counter += 1;
    }
    return null;
  }

  toString() {
    let tempList = this.list;
    let result = "";
    while (tempList != null) {
      result += `(${tempList.value}) -> `;
      tempList = tempList.nextNode;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    if (index < 0) {
      console.log("You can't Insert at negative index");
      return;
    }
    let tempList = this.list;
    for (let i = 0; i < index - 1; i += 1) {
      tempList = tempList.nextNode;
      if (tempList === null) {
        console.log(
          `Can't Insert (${value}) at index ${index}. The last item is at the index of ${
            this.size() - 1
            // eslint-disable-next-line comma-dangle
          }`
        );
        return;
      }
    }
    tempList.nextNode = NODE(value, tempList.nextNode);
  }

  removeAt(index) {
    if (index < 0) {
      console.log("index does not exit");
      return;
    }
    let cur = this.list;
    let prev = null;
    for (let i = 0; i < index; i += 1) {
      prev = cur;
      cur = cur.nextNode;
      if (cur === null) {
        console.log("index does not exit");
        return;
      }
    }
    prev.nextNode = cur.nextNode;
  }
}

const list = new LinkedList();

list.prepend("A");
list.append("B");
list.append("C");
console.log(list.toString()); // (A) -> (B) -> (C) -> null
console.log(list.head()); // return Node { A }  the first Node
console.log(list.size()); // 3
console.log(list.tail()); // return Node { C } the last Node
console.log(list.at(1)); // Node { B } Node B is the second Node
list.pop();
console.log(list.toString()); // A) -> (B) -> null
console.log(list.contains("A")); // true
console.log(list.contains("F")); // false
console.log(list.find("A")); // 0
list.append("C");
console.log(list.toString()); // (A) -> (B) -> (C) -> null
list.prepend("Z");
console.log(list.toString()); // (Z) -> (A) -> (B) -> (C) -> null
list.removeAt(1);
console.log(list.toString()); // (Z) -> (B) -> (C)-> null */
list.insertAt("A", 5); // Can't Insert (A) at index 5. The last item is at the index of 2
list.insertAt("D", 3);
console.log(list.toString()); // (Z) -> (B) -> (C) -> (D) -> null
