Promise.resolve()
    .then(() => {
        console.log(1);   // 1
        return Promise.resolve(2);
    })
    .then((res) => console.log(res));  // 2