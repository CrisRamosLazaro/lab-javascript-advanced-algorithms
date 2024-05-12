class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    return this.stackControl.length === this.MAX_SIZE ? false : true
  }

  isEmpty() {
    // ... your code goes here
    return this.stackControl.length === 0 ? true : false
  }

  push(item) {
    // ... your code goes here
    const veredict = this.canPush()
    if (veredict) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      throw new Error('STACK_OVERFLOW')
    }
  }

  pop() {
    // ... your code goes here
    const veredict = this.isEmpty()
    if (!veredict) {
      const element = this.stackControl.pop()
      return element
    } else {
      throw new Error('STACK_UNDERFLOW')
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;