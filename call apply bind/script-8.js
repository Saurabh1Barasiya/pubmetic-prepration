function show() {
  console.log(this.name);
}

const user = { name: "Saurabh" };

const fn = show.bind(user);
fn();   // saurabh  