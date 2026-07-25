const Form = () => {
	return (
		<form className="grid grid-cols-1 md:grid-cols-2 space-y-2">
			<input type="text" name="name" placeholder="Full name" />
			<input type="email" name="email" placeholder="Email" />
			<input type="tel" name="tel" placeholder="Phone number" />
			<input type="text" name="industry" placeholder="Industry" />
			<textarea placeholder="message" className="md:col-span-2"></textarea>
		</form>
	);
};

export default Form;
