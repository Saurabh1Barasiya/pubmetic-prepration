let a = 10;

function outer() {
    function inner() {
        console.log(a);  // 10
    }
    return inner;
}

function test() {
    let a = 20;
    const fn = outer();
    fn();
}

test();