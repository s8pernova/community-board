import React from "react";
import foodTrucks from "../components/foodTrucks.json";

const Cards = () => {
	return (
		<div>
			<div className="flex-container">
				{foodTrucks.map((truck) => (
					<div key={truck.id} className="flex-item">
						<div className="image-container">
							<img src={truck.imageUrl} alt={truck.name} />
						</div>
						<h3>{truck.name}</h3>
						<p>{truck.country}</p>
						<div className="menu-button">
							<a href={truck.menu} target="_blank">
								Menu
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cards;
