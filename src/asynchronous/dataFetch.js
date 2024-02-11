async function dataFetch() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3001/mongo", true);
    xhr.send(null);
  
    return await xhr;
  }


  function dataFetch() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.152:3001/mongo", true);
    xhr.send(null);
  
    return xhr;
  }