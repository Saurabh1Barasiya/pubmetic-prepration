var name = "Global";

const obj = {
  name: "Saurabh",
  show() {
    console.log(this.name);
  }
};

const fn = obj.show;
fn();

// node par ye undefined hai but browser par ye Global hai.

// to get more clear answer avoid name .