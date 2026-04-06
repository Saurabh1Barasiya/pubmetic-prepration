function x() {
    var a = 7;

    function y() {
        console.log(a);   // 7
    }

    return y;
}

var z = x();
z();