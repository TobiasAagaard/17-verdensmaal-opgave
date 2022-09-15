const apiData = [];

const getApiData = () => {
  const apiEndpoint = `https://api.mediehuset.net/sdg/goals`;

  fetch(apiEndpoint)
  .then((Response) => {
    if (Response.status === 200) {
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
        <img class="icon" src='data:image/svg+xml; utf8,${data.icon}' alt="icon">
        <img class="pic" src='${data.image}'>
        <h3>${data.title}</h3>
        <h4>${data.byline}</h4>
      </div>
    </figure>`;
}

getApiData();