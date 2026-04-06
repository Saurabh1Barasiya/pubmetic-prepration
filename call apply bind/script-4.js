const user1 = { name: "Saurabh" };
const user2 = { name: "Rahul" };

function show() {
    console.log(this.name);
}

show.call(user1); // Saurabh
show.call(user2); // Rahul