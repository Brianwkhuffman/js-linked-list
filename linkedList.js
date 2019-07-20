/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator() {
  let head = null;
  let tail = null;
  let nodeLength = 0;
  return {
    getHead: function() {
      return head;
    },
    getTail: function() {
      return tail;
    },
    add: function(val) {
      let newNode = {};
      newNode.value = val;
      newNode.next = null;
      if (!head) {
        nodeLength = 1;
        head = newNode;
        tail = head;
      } else {
        nodeLength++;
        tail.next = newNode;
        tail = newNode;
      }
      return newNode;
    },
    get: function(num) {
      let thisNode = head;
      let count = 0;
      if (num === 0) {
        return thisNode;
      }
      while (count < num && thisNode !== null) {
        thisNode = thisNode.next;
        count++;
      }
      if (thisNode === null) {
        return false;
      }
      return thisNode;
    },
    remove: function(num) {
      let removeNode = this.get(num);
      let before;
      let after = this.get(num + 1);
      if (this.get(num) === false) {
        return false;
      }
      if (num > 0) {
        before = this.get(num - 1);
        before.next = after;
        nodeLength--;
      } else {
        head = after;
        nodeLength--;
      }
      if (removeNode.next === null) {
        tail = before;
        nodeLength--;
      }
      return nodeLength;
    },
    insert: function(val, index) {
      let newNode = {};
      newNode.value = val;
      let before = this.get(index - 1);
      let oldNode = this.get(index);
      if (index < 0 || this.get(index) === false) {
        return false;
      } else if (index === 0) {
        newNode.next = head;
        head = newNode;
      } else if (index > 0 && oldNode !== false) {
        newNode.next = oldNode;
        before.next = newNode;
      } else if (oldNode === false && before === tail) {
        add(val);
      }
    }
  };
}
