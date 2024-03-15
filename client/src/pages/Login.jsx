import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
	const [inputs, setInputs] = useState({
		email: "",
	});
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputs((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Form submitted:", inputs);
		const { email, password } = inputs;
		// Check if email and password are provided
		if (!email || !password) {
			console.log("Email and password are required.");
			return;
		}
		try {
			const res = await axios.post("http://localhost:3000/auth/register", {
				email,
				password,
			});
			navigate("/");
			console.log("Login successful:", res);
		} catch (error) {
			console.log("Login error:", error.response.data.error);
		}
	};
	return (
		<div className="flex h-screen justify-center items-center">
			<div className="flex flex-col justify-center gap-3">
				<h1 className="text-5xl text-teal-500 font-serif text-center font-semibold p-5">
					Login
				</h1>
				<input
					type="email"
					placeholder="email"
					onChange={handleChange}
					name="email"
					className="input input-bordered input-lg w-full max-w-xs"
				/>
				<input
					type="password"
					onChange={handleChange}
					name="password"
					placeholder="password"
					className="input input-bordered input-lg w-full max-w-xs"
				/>
				<button
					onClick={handleSubmit}
					className="btn btn-lg bg-black hover:bg-teal-400 text-white"
				>
					Login
				</button>
				<span>
					Don't have an account?{" "}
					<Link className="text-purple-600" to="/register">
						Register
					</Link>
				</span>
			</div>
		</div>
	);
};
export default Login;
