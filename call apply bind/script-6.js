function show() {
  console.log(this.name);  // Saurabh
}

const user = { name: "Saurabh" };

show.call(user);