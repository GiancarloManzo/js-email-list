const emailListEl = document.getElementById("email-list");
for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      console.log(response.data);
      console.log(response);
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });
}
