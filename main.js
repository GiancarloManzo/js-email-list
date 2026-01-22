const btnGenerate = document.getElementById("Generate-Button");
const emailListEl = document.getElementById("email-list");
const loaderEl = document.getElementById("loader");

function generateEmails() {
  emailListEl.innerHTML = "";
  btnGenerate.classList.add("d-none");
  loaderEl.classList.remove("d-none");
  for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        const email = response.data.response;
        const li = document.createElement("li");

        li.classList.add("list-group-item");
        li.innerText = ` ${email}`;
        emailListEl.append(li);

        if (emailListEl.children.length === 10) {
          loaderEl.classList.add("d-none");
          btnGenerate.classList.remove("d-none");
        }
        console.log(response.data);
        console.log(response);
      })
      .catch((error) => {
        loaderEl.innerText = "Errore!";
        loaderEl.classList.add("d-none");
        btnGenerate.classList.remove("d-none");
      });
  }
}
btnGenerate.addEventListener("click", generateEmails);
