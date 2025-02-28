import React from "react";
import Cards from "./components/cards";

const App = () => {
	return (
		<div className="App">
			<div>
				<img src="./src/assets/awning.png" alt="awning" id="awning" />
				<h1 class="title">Food Truck Favorites</h1>
				<Cards />
			</div>
		</div>
	);
};

export default App;
