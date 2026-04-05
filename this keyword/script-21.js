const obj = {
  lastName: "Saurabh",
  show: function () {
    console.log(this.lastName);
  }
};
setTimeout(obj.show, 1000);