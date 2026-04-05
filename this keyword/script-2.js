const obj = {
  name: "Saurabh",
  show: function () {
    console.log(this.name);   // undefined or '' string
  }
};
const fn = obj.show;
fn();