import Cart from "../../Componets/Sheared_Components/Card/Cart";
import Menu_Item from "../../Componets/Sheared_Components/Menu_Item/Menu_Item";
import Section_Title from "../../Componets/Sheared_Components/Section_Title/Section_Title";
import useGet_Menu from "../../Hooks/Get_Menu/useGet_Menu";
import Header from "./Header/Header";
import Home_Slider_Menu from "./Home_Slider_Menu/Home_Slider_Menu";
import QuealityFood from "./QuealityFood/QuealityFood";
import Testimonails from "./Testimonails/Testimonails";


const Home = () => {
	const {salads} = useGet_Menu();
  return (
		<div>
			{/* Header com  */}
			<Header />
			{/* Section Title com  */}
			<div className="mt-10 lg:mt-20">
				<Section_Title
					title="ORDER ONLINE"
					subTitle="---From 11:00am at 10:00pm---"
				/>
			</div>
			{/* Home Menu Slider com  */}
			<div className="container mx-auto px-5 mt-10 lg:px-10">
				<Home_Slider_Menu />
			</div>
			{/* Section Title com  */}
			<div className="mt-10 lg:mt-20">
				<Section_Title title="FORM OUR MENU" subTitle="---Check it out---" />
			</div>
			{/* Menu Item com  */}
			<div className="container mx-auto">
				<Menu_Item item={salads} style="mt-10" txt="View Full Menu " />
				<div className="w-full mt-20 py-28  bg-black flex justify-center ">
					<h1 className="text-white text-3xl lg:text-7xl">
						Call Us : 01703890915
					</h1>
				</div>
			</div>
			{/* Section Title com  */}
			<div className="mt-10 lg:mt-20">
				<Section_Title title="Chef Recommends" subTitle="--Should Try--" />
			</div>
			{/* Cart com  */}
			<div className="container mx-auto mt-20 px-5">
				<Cart cardItem={salads} />
			</div>
			{/* Queality food */}
			<QuealityFood />
			{/* Section Titile  */}
			<div className="mt-10 lg:mt-20">
				<Section_Title
					title="TESTIMONIALS"
					subTitle="--What Our client say--"
				/>
			</div>
			{/* Testimonails  */}
			<div className="container mx-auto">
				<Testimonails />
			</div>
			{/* Footer com  */}
		</div>
	);
}

export default Home
