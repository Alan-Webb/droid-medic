const Form = () => {
	return (
		<form className="grid grid-cols-1 md:grid-cols-2 space-y-2">
			<input type="text" name="name" placeholder="Full name" />
			<input type="email" name="email" placeholder="Email" />
			<input type="tel" name="tel" placeholder="Phone number" />
			<input type="text" name="industry" placeholder="Industry" />
			<input type="text" name="service" placeholder="Service" />
			<input type="text" name="address" placeholder="Address" />
			<input type="text" name="city" placeholder="City" />
			<input type="text" name="zip-code" placeholder="Zip code" />
			<textarea placeholder="message" className="md:col-span-2"></textarea>
			<button className="md:col-span-2 px-5 py-2 bg-amber-600 text-white uppercase">
				Submit
			</button>
		</form>
	);
};

export default Form;
