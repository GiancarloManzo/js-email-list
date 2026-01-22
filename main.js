const btnGenerate = document.getElementById("Generate-Button");
const emailListEl = document.getElementById("email-list");
const loaderEl = document.getElementById("loader");

function generateEmails() {
  emailListEl.innerHTML = "";
  resultsEl.innerText = "Caricamento...";

  for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        const email = response.data.response;
        const li = document.createElement("li");

        li.classList.add("list-group-item");
        li.innerText = `${i + 1}) ${email}`;
        emailListEl.append(li);

        if (emailListEl.children.length === 10) {
          resultsEl.innerText = "Finito!";
        }
        console.log(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log("ERROR:", error);
        resultsEl.innerText = "Errore!";
      });
  }
}
btnGenerate.addEventListener("click", generateEmails);
