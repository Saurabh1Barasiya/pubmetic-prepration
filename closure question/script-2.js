function outer() {
    let a = 10;

    return function () {
        a++;
        console.log(a);
    };
}

const fn = outer();
fn();  // 11
fn();  // 12