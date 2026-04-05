function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
            console.log(count);
        },
        decrement() {
            count--;
            console.log(count);
        }
    };
}

const counter = createCounter();
// console.log(counter);

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1