const obj = {
    lastName: "Saurabh",
    show() {
        return () => {
            console.log(this.lastName);
        };
    }
};

obj.show()();