function show() {
    console.log(this.name);  
}

const user = { name: "Saurabh" };

show.call(null);  // undefined