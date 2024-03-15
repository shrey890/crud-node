import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<footer className="footer items-center p-4 bg-neutral text-neutral-content">
				<aside className="items-center grid-flow-col">
				
					<p>Copyright © 2024 - Shrey</p>
				</aside>
				<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
					<Link target="_blank" to='https://github.com/shrey890'>
						Github
					</Link>
					<Link target="_blank" to='https://shreyz.medium.com' >
						Medium
					</Link>
			
				</nav>
			</footer>
		</div>
	);
};
export default Footer;
