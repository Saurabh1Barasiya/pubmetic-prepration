const obj = {
  lastName: "Saurabh",
  show() {
    function inner() {
      console.log(this.lastName);  // undefined
    }
    inner();
  }
};
obj.show();