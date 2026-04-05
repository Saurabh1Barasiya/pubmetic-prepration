var length = 10;

function show() {
  console.log(this.length);
}

const obj = {
  length: 5,
  method() {
    // console.log(arguments);
    arguments[0]();   // 3
  }
};

obj.method(show, 1, 2);