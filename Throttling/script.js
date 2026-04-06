// please body ki height and width set kar dena. css se

const body = document.querySelector("body");
let count = 0;

function makeThrottle(func, delay) {
    let waitingTime = false;
    return function (...args) {
        if (!waitingTime) {
            waitingTime = true;
            func.call(this, ...args)
            setTimeout(() => {
                waitingTime = false;
            }, delay)
        }
    }
}

const throttleFunc = makeThrottle(() => {
    count++;
    console.log(count);
}, 1000);

body.addEventListener("mousemove",throttleFunc);