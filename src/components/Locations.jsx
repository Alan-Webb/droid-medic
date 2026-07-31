import LocationsBG from "../assets/locationsBG.webp";

const Locations = () => {
	return (
		<div
			style={{backgroundImage: `url("${LocationsBG}")`}}
			className="py-20 bg-cover bg-center">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-center text-4xl font-bold text-amber-500 tracking-wider">
					Our Store Locations
				</h2>
			</div>
		</div>
	);
};

export default Locations;
