function greet(greeting) {
  console.log(greeting + " " + this.name);
}

const user = { name: "Saurabh" };

const sayHello = greet.bind(user, "Hello");

sayHello();  // hello saurabh