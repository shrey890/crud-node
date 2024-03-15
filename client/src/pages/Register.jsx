import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const [err, setErr] = useState("");
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputs((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:3000/auth/register", inputs);
			navigate("/login");
		} catch (error) {
			setErr(error.response.data);
		}
	};
	return (
		<div className="flex h-screen  justify-center items-center">
			<div className="flex flex-col justify-center gap-3">
				<h1 className="text-5xl text-purple-500 font-serif font-semibold p-5">
					Register
				</h1>
				<input
					type="text"
					name="username"
					placeholder="Name"
					onChange={handleChange}
					className="input input-bordered input-lg w-full max-w-xs"
				/>
				<input
					type="email"
					name="email"
					onChange={handleChange}
					placeholder="email"
					className="input input-bordered input-lg w-full max-w-xs"
				/>
				<input
					type="text"
					name="password"
					onChange={handleChange}
					placeholder="password"
					className="input input-bordered input-lg w-full max-w-xs"
				/>
				{err && (
					<p className="text-center text-red-600 font-bold">
						user already exist
					</p>
				)}
				<button
					onClick={handleSubmit}
					className="btn btn-lg bg-black hover:bg-purple-600 text-white"
				>
					Register
				</button>
				<span>
					Already have an account?{" "}
					<Link className="text-purple-600" to="/login">
						login
					</Link>
				</span>
			</div>
		</div>
	);
};
export default Register;
