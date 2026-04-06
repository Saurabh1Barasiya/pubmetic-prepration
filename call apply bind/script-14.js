function show() {
    console.log(this.name);
}

const user = { name: "Saurabh" };

const fn = show.bind(user);

const fn2 = fn.bind({ name: "Rahul" });

fn2();  // saurabh