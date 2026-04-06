Promise.resolve(1)
    .then((res) => {
        console.log(res);  // 1
        return res + 1;
    })
    .then((res) => {
        console.log(res); // 2
    });