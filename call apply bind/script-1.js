function greet(age) {
    console.log(this.name, age);   // Saurabh 25
}

const user = { name: "Saurabh" };

greet.call(user, 25);