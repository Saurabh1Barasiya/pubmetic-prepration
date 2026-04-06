function outer() {
    let a = 10;

    function inner() {
        let a = 20;
        console.log(a);  // 20
    }

    inner();
}

outer();