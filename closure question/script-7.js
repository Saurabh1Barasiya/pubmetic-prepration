function test() {
    let x = 10;

    return function () {
        console.log(x);  //  10
    };
}

let x = 20;

const fn = test();
fn();