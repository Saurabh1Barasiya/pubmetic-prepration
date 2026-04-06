const obj = {
    name: "Saurabh",
    show() {
        console.log(this.name);
    }
};

setTimeout(obj.show.bind(obj), 1000);  // saurabh