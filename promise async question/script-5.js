Promise.reject("Error")
    .then(() => console.log("then"))
    .catch((err) => console.log(err));   // Error