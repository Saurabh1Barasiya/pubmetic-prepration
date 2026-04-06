function x() {
    var a = 7;

    return function y() {
        console.log(a);  // 7
    };
}

var z = x();
z();