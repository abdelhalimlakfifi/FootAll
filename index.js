async function fetchphp() {
  const response = await fetch('http://127.0.0.1:5400/').then((response) => {
    return response.json();
  });
  return response;
}

fetchphp().then((response) => {
  console.log(response);
});
