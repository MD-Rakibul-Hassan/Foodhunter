import { NavLink } from "react-router-dom";
export const navItem = (
	<>
		<li>
			<NavLink
				to="/"
				className={({ isActive, isPending }) =>
					isActive ? "text-yellow-300 lg:text-xl" : "text-white lg:text-xl font-semibold"
				}
			>
				Home
			</NavLink>
		</li>
		<li>
			<NavLink
				to="/contact"
				className={({ isActive, isPending }) =>
					isActive ? "text-yellow-300 lg:text-xl" : "text-white lg:text-xl font-semibold"
				}
			>
				Contact Us
			</NavLink>
		</li>
		<li>
			<NavLink
				to="/dashbord"
				className={({ isActive, isPending }) =>
					isActive ? "text-yellow-300 lg:text-xl" : "text-white lg:text-xl font-semibold"
				}
			>
				Dashbord
			</NavLink>
		</li>
		<li>
			<NavLink
				to="/menu"
				className={({ isActive, isPending }) =>
					isActive ? "text-yellow-300 lg:text-xl" : "text-white lg:text-xl font-semibold"
				}
			>
				Our Menu
			</NavLink>
		</li>
		<li>
			<NavLink
				to="/shop"
				className={({ isActive, isPending }) =>
					isActive ? "text-yellow-300 lg:text-xl" : "text-white lg:text-xl font-semibold"
				}
			>
				Our Shop
			</NavLink>
		</li>
	</>
);
