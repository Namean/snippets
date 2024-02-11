function query() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3001/mongo", true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.send(null);
    return new Promise(xhr);
  }