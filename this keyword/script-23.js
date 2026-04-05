const obj = {
    name: "Saurabh",
    show() {
        console.log(this.name);  //Rahul
    }
};

const fn = obj.show.bind({ name: "Rahul" });
fn();