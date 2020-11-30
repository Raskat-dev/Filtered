function getComments () {
  return fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    });
}

export { getComments };
