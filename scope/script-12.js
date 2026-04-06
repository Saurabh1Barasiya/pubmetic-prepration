let a = 1;

function outer() {
    function inner() {
        console.log(a);  // 1
    }
    inner();
}

outer();