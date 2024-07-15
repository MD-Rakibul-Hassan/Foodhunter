import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import cehef from "../../../assets/home/chef.jpg";
import Overlay from "../../../Componets/Sheared_Components/Overlay/Overlay";

const Home_Slider_Menu = () => {
	const slides = [slide1, slide2, slide3, slide4, slide5];
	return (
		<div className="">
			{/* Slider Menu Part  */}
			<div className="flex justify-center">
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					className="mySwiper"
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<img src={slide} className="w-full" />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* Overlay Part  */}
			<Overlay
				img={cehef}
				style="mt-10"
				overlayStyle="bg-white text-black"
				title="Food Hunter"
				decription="
                    Welcome to Foodhunter, where culinary artistry meets a warm, inviting atmosphere. Our restaurant is dedicated to providing an exceptional dining experience, blending traditional flavors with innovative twists"
			/>
		</div>
	);
};

export default Home_Slider_Menu;
