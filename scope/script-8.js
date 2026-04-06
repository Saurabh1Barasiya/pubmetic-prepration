function outer() {
    let a = 10;

    function inner() {
        console.log(a); // 10
    }

    inner();
}

outer();