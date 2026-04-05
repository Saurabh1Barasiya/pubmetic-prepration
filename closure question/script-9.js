function counter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const c1 = counter();
const c2 = counter();

console.log(c1()); // 1
console.log(c1()); // 2
console.log(c2()); // 1