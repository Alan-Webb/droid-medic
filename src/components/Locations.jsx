import LocationsBG from "../assets/locationsBG.webp";
import {FaLocationPin} from "react-icons/fa6";

const cities = [
	"London",
	"Tokyo",
	"New York",
	"Copenhagen",
	"Vienna",
	"Zurich",
	"Bangkok",
	"Sydney",
	"Vancouver",
];

const Locations = () => {
	return (
		<div
			style={{backgroundImage: `url("${LocationsBG}")`}}
			className="py-20 bg-cover bg-center">
			<div className="max-w-7xl mx-auto">
				{/* HEADING */}
				<h2 className="text-center text-4xl font-bold text-amber-500 tracking-wider">
					Our Store Locations
				</h2>
			</div>
			{/* LOCATION CARDS */}
			<div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{cities.map((city, index) => (
					<div
						key={index}
						className="bg-amber-700/40 rounded-lg p-4  text-center shadow-md">
						<FaLocationPin className="text-stone-300 mx-auto mb-2" />
						<h3 className="text-stone-300 text-2xl font-bold uppercase tracking-wider">
							{city}
						</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Locations;
