function greet(age) {
  console.log(this.name, age); // saurabh 25
}

const user = { name: "Saurabh" };

greet.apply(user, [25]);