const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  const App = document.getElementById("app");

  let appBody = `
  				<div id="main-content">
					<input type="text" id="subject-input" placeholder="Novo assunto...">
					<button id="change-button">Alterar</button>
					<ul id="tickets-list">
					</ul>
				</div>
				`;

  // Write App
  App.innerHTML = appBody;
};

export default Main;
