async function fetchAll() {
  const options = {
    method: 'GET',
  };
  const request = await fetch(
    'http://127.0.0.1:3000/teams/65/matches/?dateFrom=2023-08-31&dateTo=2023-09-07',
    options
  ).then((response) => {
    return response.json();
  });

  return request;
}

fetchAll().then((response) => {
  console.log(JSON.parse(response));
});
