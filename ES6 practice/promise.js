const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("DAta loaded");
  }, 1500);
});

promise.then((data) => {
  console.log(data);
});
