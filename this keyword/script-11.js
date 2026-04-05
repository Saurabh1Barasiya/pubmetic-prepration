function greet() {
  console.log(this.name);  // Saurabh
}

const user = { name: "Saurabh" };

const fn = greet.bind(user);
fn();