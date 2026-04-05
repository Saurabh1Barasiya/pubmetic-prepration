const obj = {
  name: "Saurabh",
  show() {
    console.log(this.name);  // saurabh
  }
};
obj.show();