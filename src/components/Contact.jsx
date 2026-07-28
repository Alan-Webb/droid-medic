import Form from "./Form";

const Contact = () => {
	return (
		<div className="bg-stone-300">
			<div>
				{/* LEFT SIDE CONTENT */}
				<div className="px-8 md:px-0 pt-8">
					<h2 className="text-4xl font-bold mb-2 text-center text-amber-600 tracking-wider">
						Contact Us
					</h2>
					<p>
						Software updates, battery replacement or a complete overhaul, our
						engineers will give you expert advice on getting your droid back to
						its best. The Droid Salon team is here to help. We pride ourselves
						on delivering a fast, reliable service, honest pricing, and friendly
						customer service you can trust. No matter the issue, we'll take the
						time to explain your options and provide a solution that tailored to
						your needs. Upgrade your droid and upgrade your life.
					</p>
				</div>
				{/* RIGHT SIDE FORM */}
				<div className="mt-6 md:mt-0 px-8 md:px-0">
					<h2 className="text-xl font-bold text-amber-600">Get A Quote</h2>
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Contact;
