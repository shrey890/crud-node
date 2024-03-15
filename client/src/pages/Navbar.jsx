import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a>Item 1</a>
							</li>
							<li>
								<a>Parent</a>
								<ul className="p-2">
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</li>
							<li>
								<a>Item 3</a>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost text-xl">Blog-App</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<details>
								<summary>Category</summary>
								<ul className="p-2">
									<li>
										<Link to='?cat=art'>Art</Link>
									</li>
									<li>
										<Link to='?cat=technology'>Technology</Link>
									</li>
									<li>
										<Link to='?cat=food'>food</Link>
									</li>
									<li className="z-50">
										<Link to='?cat=design'>Design</Link>
									</li>
									
								</ul>
							</details>
						</li>
						<li>
							<span>John</span>
						</li>
					</ul>
				</div>
			
				<div className="navbar-end gap-3">
					<Link to='write' className="btn btn-neutral	text-white">Write</Link>
					<Link className="btn">Logout</Link>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
