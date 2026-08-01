import LocationsBG from "../assets/locationsBG.webp";

const cities = ["City A", "City B", "City C", "City D", "City E", "City F"];

const Locations = () => {
	return (
		<div
			style={{backgroundImage: `url("${LocationsBG}")`}}
			className="py-20 bg-cover bg-center">
			<div className="max-w-7xl mx-auto">
				{/* HEADING */}
				<h2 className="bg-black/35 text-center text-4xl font-bold text-amber-500 tracking-wider">
					Our Store Locations
				</h2>
			</div>
			{/* LOCATION CARDS */}
		</div>
	);
};

export default Locations;
