let a = 10;

function outer() {
    let a = 20;

    return function inner() {
        console.log(a);  // 20
    };
}

const fn = outer();

(function () {
    let a = 30;
    fn();
})();