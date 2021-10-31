const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  const App = document.getElementById("app");
  let appBody = `
  				<div id="main-content">
					<input type="text" id="subject-input" placeholder="...">
					<button id="change-button">Change</button>
				</div>
				`;

  // Write App
  App.innerHTML = appBody;
};

export default Main;
