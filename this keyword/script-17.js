var length = 10;

function show() {
  console.log(this.length); // 10
}

const obj = {
  length: 5,
  method(fn) {
    fn();
  }
};

obj.method(show);

// please run this code into browser