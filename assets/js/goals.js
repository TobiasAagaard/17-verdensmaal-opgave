const apiData = [];

const getApiData = () => {
  const apiEndpoint = `https://api.mediehuset.net/sdg/goals`;

  fetch(apiEndpoint)
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    }
  })
  .then((data) => {
    console.log(data.items);
    apiData.push(...data.items);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    renderContent();
  });
};

let renderContent = () => {
  apiData.map((data) => createElements(data));
}

const createElements = (data) => {
  document.getElementById("mother").innerHTML += `
    <figure class="card" style="background-color: #${data.color};">
      <div class="container">
        <img src='data:image/svg+xml; utf8,${data.icon}' alt="icon">
        <h4>${data.title}</h4>
        <p>${data.byline}</p>
      </div>
    </figure>`;
}

getApiData();