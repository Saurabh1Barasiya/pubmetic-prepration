function show(age) {
    console.log(this.name, age);   // saurabh 25
}

const user = { name: "Saurabh" };

show.apply(user, [25]);