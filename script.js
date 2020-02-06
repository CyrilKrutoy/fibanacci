// //Fibonacci


// Recursion
const fib = (index, prev = 0, last = 1) => {
    if (!index) return 0;
    return index - 2 > 1 ? fib(index - 1, last, last + prev) : prev + last;
}


//  Cycle
function fibCycle(index) {
    let prev = 0,
        next = 1;
    for (let i = 1; i <= index; i++) {
        last = prev + next;
        prev = next;
        next = last;
    }
    return last;
}


// CallBack
function callbackFunc(index, result) {
    console.log(`The ${index} element of Fibonacci sequence is ${result}`);
}


// GetFibElement
function getFibElement(index, funcRes) {
    let res = index > 100 ? fib(index) : fibCycle(index);
    funcRes(index, res)
}
let res,
    index,
    i = 0;
while (i < 20) {
    index = Math.ceil(2 + Math.random() * 198)
    getFibElement(index, callbackFunc)
    i++
}
