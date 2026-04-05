var lastName = "Global";

const obj = {
  lastName: "Saurabh",
  show() {
    console.log(this.lastName);  // global 
  }
};

const fn = obj.show;
fn();


// because var se bane variable window par add ho jate hai.