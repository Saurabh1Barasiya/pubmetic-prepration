const obj = {
    name: "Saurabh",
    show() {
        console.log(this.name);
    }
};

setTimeout(obj.show, 1000);   // isko fix kero.


setTimeout(obj.show.bind(obj), 1000);  // Saurabh

