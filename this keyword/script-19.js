const obj = {
  lastName: "Saurabh",
  show() {
    return function () {
      console.log(this.lastName);   // undefined
    };
  }
};

obj.show()();