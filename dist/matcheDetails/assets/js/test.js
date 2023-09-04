async function getTweetHandle() {
  const url = 'https://api.twitter.com/2/users/by?usernames=twitterdev';
  const options = {
    method: 'Get',
    headers: {
      Authorization:
        'AAAAAAAAAAAAAAAAAAAAALLypgEAAAAAJZrBVsJDxoiSMaSRTe0%2F0PYm7EU%3Dny5hRv1cL5foe4pP1RGh5BrZSvwQkgNbWmeEkqw0oEcDhxxXEF',
    },
  };
  const result = await fetch(url, options).then((response) => {
    return response.json();
  });

  return result;
}

getTweetHandle().then((result) => {
  console.log(result);
});
