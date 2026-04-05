const obj = {
  lastName: "Saurabh",
  show: function () {
    console.log(this.lastName);  // undefined
  }
};
const fn = obj.show;
fn();