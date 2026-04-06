function outer() {
    let a = 10;

    function inner() {
        console.log(a);   // 10
    }

    return inner;
}

const fn = outer();

let a = 50;

fn();