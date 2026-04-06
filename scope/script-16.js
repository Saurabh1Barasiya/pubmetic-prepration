let a = 10;

function test() {
    console.log(a);  // 10
}

function test2() {
    let a = 20;
    test();
}

test2();