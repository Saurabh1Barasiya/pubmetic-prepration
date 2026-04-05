function outer() {
    let a = 10;

    return function () {
        console.log(a);
    };
}

outer();