console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => {
    console.log(3);
    return Promise.resolve(4);
}).then((res) => console.log(res));

console.log(5);

/*
    1
    5
    3
    4
    2
*/