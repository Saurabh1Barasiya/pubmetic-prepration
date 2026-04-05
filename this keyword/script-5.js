const obj = {
    lastName: "Saurabh",
    show: () => {
        console.log(this.lastName);  // undefined
    }
};
obj.show();