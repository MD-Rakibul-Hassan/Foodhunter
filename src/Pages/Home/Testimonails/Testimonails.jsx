import useGet_Open_Data from "../../../Hooks/Axios_open/useGet_Open_Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Testimonails = () => {
	const data = useGet_Open_Data("./reviews.json");

	return (
		<div className="my-20">
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				{/* <SwiperSlide>Slide 1</SwiperSlide> */}
				{data?.map((review, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="flex flex-col  items-center">
								<h1>{review.name}</h1>
								<p className="px-10">{review.details}</p>
								<div className="rating mt-10">
									{[
										...Array(review.rating)].map((item) => {
											return (
												<input
													type="radio"
													name="rating-2"
													className="mask mask-star-2 bg-orange-400"
												/>
											);
										})
									}
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Testimonails;
