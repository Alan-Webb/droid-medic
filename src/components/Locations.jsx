import LocationsBG from "../assets/locationsBG.webp";

const cities = [
	"City A",
	"City B",
	"City C",
	"City D",
	"City E",
	"City F",
	"City G",
	"City H",
];

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
			<div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{cities.map((city, index) => (
					<div key={index} className="bg-amber-700/85 rounded-lg p-4 m-2 text-center shadow-md">
						<h3 className="text-stone-300 text-xl font-semibold">{city}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Locations;
