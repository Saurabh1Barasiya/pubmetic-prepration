class User {
  constructor(name) {
    this.name = name;
  }

  show() {
    console.log(this.name);   // Saurabh
  }
}

const u1 = new User("Saurabh");
u1.show();  