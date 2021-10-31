// Start client and resize app
let client = ZAFClient.init();

client.on("app.registered", (e) => {
  client.invoke("resize", { width: "100%", height: "130px" });
});

// Create screen context
import Core from "./Core.js";
import Main from "./Main.js";
Main();

const button = document.getElementById("change-button");

button.addEventListener("click", changeSubject);

function changeSubject() {
  const inputText = document.getElementById("subject-input").value.trim() ?? "";
  if (!inputText) {
    console.log("Não Rolou");
    return;
  }

  const dateAndHour = Core.getDateAndHour();

  const newSubject = `${inputText} ${dateAndHour}`;

  client
    .set("ticket.subject", newSubject)
    .then(() => {
      Main();
    })
    .catch((err) => alert("Error"));
}
