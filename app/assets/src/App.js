// Start client and resize app
let client = ZAFClient.init();

client.on("app.registered", (e) => {
  client.invoke("resize", { width: "100%", height: "130px" });
});

// Create screen context
import Core from "./Core.js";
import Main from "./Main.js";
Main();
populateTickets();

const button = document.getElementById("change-button");

button.addEventListener("click", changeSubject);

function changeSubject() {
  const inputElement = document.getElementById("subject-input");
  let inputText = document.getElementById("subject-input").value.trim();

  if (!inputText) {
    return;
  }

  const dateAndHour = Core.getDateAndHour();
  const newSubject = `${inputText} ${dateAndHour}`;

  client
    .set("ticket.subject", newSubject)
    .then(() => {
      inputElement.value = "";
      populateTickets();
    })
    .catch((err) => console.log(err));
}

function populateTickets() {
  const list = document.getElementById("tickets-list");
  let tickets = [];

  client.request({ url: "/api/v2/tickets/recent" }).then((data) => {
    data.tickets.forEach((ticket) => {
      tickets.push(
        `<li><a id="ticket-link" href="${client["_origin"]}/agent/tickets/${ticket.id}" target="_blank"><span>Ticket ${ticket.id}: </span><span>${ticket.subject}</span></a></li>`
      );
    });
    list.innerHTML = tickets.join("");
  });
}
