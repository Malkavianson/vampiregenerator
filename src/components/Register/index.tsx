const Register = (): JSX.Element => {
	return (
		<form
			name="signIn"
			// onSubmit={() => {}}
		>
			<div>
				<div>
					<label htmlFor="email">Name</label>
					<input
						name="email"
						type="email"
						placeholder="email"
					/>
				</div>
				<div>
					<label htmlFor="email">E-mail</label>
					<input
						name="email"
						type="email"
						placeholder="email"
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						name="password"
						type="password"
						placeholder="password"
					/>
				</div>
			</div>

			<button>Register</button>
		</form>
	);
};

export default Register;
