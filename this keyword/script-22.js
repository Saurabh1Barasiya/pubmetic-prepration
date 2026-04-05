const obj = {
    name: "Saurabh",
    show: function () {
        console.log(this.name);  // saurabh
    }
};

setTimeout(() => obj.show(), 1000);