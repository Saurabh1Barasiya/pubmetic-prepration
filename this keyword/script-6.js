const obj = {
  name: "Saurabh",
  show() {
    const inner = () => {
      console.log(this.name);   // Saurabh
    };
    inner();
  }
};
obj.show();


// plase avoid the name . in the javascript name is reserve keyword.