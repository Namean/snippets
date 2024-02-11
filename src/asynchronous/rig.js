function rig() {
    let R = dataFetch();
  
    setTimeout(() => {
      console.log(R.response);
    }, 500);
  }