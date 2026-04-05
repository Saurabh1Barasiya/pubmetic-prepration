function greet() {
  console.log(this.name);  // Saurabh
}

const user = { name: "Saurabh" };

greet.call(user);