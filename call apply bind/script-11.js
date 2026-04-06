function show() {
    console.log(this.name);
}

const user = { name: "Saurabh" };

const fn = show.bind(user);

fn.call({ name: "Rahul" });    // saurabh 

//  1 baar hamne bind ka use karke this ki value set kar do fir ham usko change nahi kar sakte hai.