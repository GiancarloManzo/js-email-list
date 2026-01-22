const btnGenerate = document.getElementById("Generate-Button");
const emailListEl = document.getElementById("email-list");
const resultsEl = document.getElementById("results");
function generateEmails() {
  emailListEl.innerHTML = "";
  resultsEl.innerText = "Caricamento...";
}
for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const email = response.data.response;
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerText = `${i + 1}) ${email}`;
      console.log(response.data);
      console.log(response);
      emailListEl.append(li);
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });
}

btnGenerate.addEventListener("click", generateEmails);
