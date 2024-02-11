function dataFetchPromise() {
    new Promise((resolve) => {
      dataFetch((err, data) => {
        console.log(data);
      });
    });
  }