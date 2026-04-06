// 👉 JavaScript me this kabhi-kabhi lose ho jata hai:

const obj = {
  name: "Saurabh",
  show() {
    console.log(this.name);
  }
};

const fn = obj.show;
fn(); // ❌ undefined


fn.call(obj);   // Saurabh