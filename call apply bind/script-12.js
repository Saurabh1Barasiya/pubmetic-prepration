function show() {
  console.log(this.name);
}

const user = { name: "Saurabh" };

const fn = show.bind(user);

const obj = { name: "Rahul" };

fn.apply(obj);   // Saurabh