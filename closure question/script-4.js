function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const a = outer();
const b = outer();

a(); // 1
a(); // 2 
b(); // 1