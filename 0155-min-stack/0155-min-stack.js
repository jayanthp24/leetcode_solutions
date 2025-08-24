
var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    let valAndMin = [val];
    if (this.stack.length === 0) {
        valAndMin.push(val);
    } else {
        let topMinVal = this.stack[this.stack.length - 1][1];
        let minVal = Math.min(topMinVal, val);
        valAndMin.push(minVal);
    }
    this.stack.push(valAndMin);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    let topEle = this.stack[this.stack.length - 1];
    return topEle[1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */