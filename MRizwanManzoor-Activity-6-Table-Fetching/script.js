async function fetchTable() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonData = await response.json();
  return jsonData;
}

fetchTable().then((jsonData) => {
  for (let i = 0; i < jsonData.length; i++) {
    document.querySelector(".table-content").innerHTML += `
        <div class="table-row">
            <div class="table-data">${jsonData[i].name}</div>
            <div class="table-data">${jsonData[i].email}</div>
            <div class="table-data">${
              jsonData[i].address.street + ", " + jsonData[i].address.city + ","
            } <br> ${jsonData[i].address.zipcode}
            </div>
        </div>
    `;
  }
});
