const obj = {
  name: "Saurabh",
  show() {
    function inner() {
      console.log(this.name);  // '' or undefined
    }
    inner();
  }
};
obj.show();

// please avoid name because its already reserverd in the window object.