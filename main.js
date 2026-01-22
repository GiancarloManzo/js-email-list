axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => {
    console.log(response.data);
    console.log(response);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });
