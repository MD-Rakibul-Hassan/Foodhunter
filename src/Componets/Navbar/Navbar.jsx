
import { Link } from 'react-router-dom';
import {navItem} from './Nav_item'

const Navbar = () => {
    
  return (
		<div className="fixed w-full top-0 z-50 text-white right-[50%] translate-x-[50%]  font-inter_font">
			<div className="navbar bg-black px-5 lg:px-20 opacity-85">
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
							className="menu menu-sm dropdown-content bg-slate-600 rounded-box z-[1] mt-3 w-52 p-2 shadow "
						>
							{navItem}
						</ul>
					</div>
					<Link className="hidden md:block">
						<h1 className=" text-4xl fond-bold tracking-wide">
							Food<span className="text-yellow-300">hunter</span>
						</h1>
						<p className='lg:tracking-[8px] lg:text-xl'>
							<span className='lg:text-2xl text-yellow-300'>R</span>estaurant
						</p>
					</Link>
				</div>
				<div className="navbar-center navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{navItem}</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar
