
// BÀI 1: delay(ms) trả về Promise
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(() => console.log("2 seconds passed"));


// BÀI 2: fetchMultipleData(urls) – trả về Promise.all
function fetchMultipleData(urls) {
  const fetchPromises = urls.map(url =>
    fetch(url).then(response => response.json())
  );

  return Promise.all(fetchPromises);
}

fetchMultipleData([
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2"
])
  .then(users => console.log(users))
  .catch(error => console.error(error));
