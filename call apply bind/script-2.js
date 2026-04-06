function greet(age,address) {
    console.log(this.name, age,address);   // Saurabh 25 harrai
}

const user = { name: "Saurabh" };

greet.apply(user, [25,"harrai"]);  // apply takes an array 