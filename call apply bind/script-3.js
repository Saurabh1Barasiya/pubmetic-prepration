function greet(age,address) {
    console.log(this.name, age,address);   // Saurabh 25 harrai
}

const user = { name: "Saurabh" };

const bindedFn = greet.bind(user,25,"harrai");  // apply takes an array 
console.log("line 1");
console.log("line 2");
bindedFn();

/*
 line 1
 line 2
 Saurabh 25 harrai
*/