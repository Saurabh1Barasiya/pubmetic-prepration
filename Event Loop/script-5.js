setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => {
    console.log("B");
    Promise.resolve().then(() => console.log("C"));
});

console.log("D");

/*
D
B
C
A
*/