let a = 1;

function outer() {
    let a = 2;

    function inner() {
        let a = 3;
        console.log(a);  // 3
    }

    inner();
}

outer();