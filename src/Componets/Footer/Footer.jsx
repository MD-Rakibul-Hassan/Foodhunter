import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 px-5">
			<div className="bg-[#1F2937] h-96   w-full">
				<div className="text-white flex flex-col items-center mr-20 justify-center h-full text-center">
					<h1 className="uppercase my-3 text-2xl">Contact us</h1>
					<p className="mb-2  font-normal text-md ">
						123 ABS Street, Uni 21, Bangladesh
					</p>
					<p className="mb-2  font-normal text-md ">+01703890915</p>
					<p className="mb-2  font-normal text-md ">Mon-Fri: 08:00-22:00</p>
					<p className="mb-2  font-normal text-md ">Sat-Sun: 08:00-22:00</p>
				</div>
			</div>
			<div className="bg-[#111827] h-96 w-full">
				<div className="text-white flex flex-col items-center mr-20 justify-center h-full text-center">
					<h1 className="uppercase my-3 text-2xl">Follow Us</h1>
                    <p className="mb-2  font-normal text-md ">Join us on socail media</p>
                    <div className="flex gap-5 mt-5">
                        <FaFacebook />
                        <FaLinkedin />
                        <FaTwitter />
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
