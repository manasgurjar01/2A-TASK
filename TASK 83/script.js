let users = document.querySelector("#users");

fetch("https://jsonplaceholder.typicode.com/abc")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Data nahi mila");
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Failed to load data");
    users.innerHTML = 'Failed to load data';
  });
