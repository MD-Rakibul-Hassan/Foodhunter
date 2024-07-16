import Menu_Item from "../../Componets/Sheared_Components/Menu_Item/Menu_Item";
import Section_Title from "../../Componets/Sheared_Components/Section_Title/Section_Title";
import useGet_Menu from "../../Hooks/Get_Menu/useGet_Menu";
import Header from "./Header/Header";
import Home_Slider_Menu from "./Home_Slider_Menu/Home_Slider_Menu";


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
				<Section_Title
					title="FORM OUR MENU"
					subTitle="---Check it out---"
				/>
			</div>
		  {/* Menu Item com  */}
		  <Menu_Item item={salads} style='mt-10'/>
			{/* Section Title com  */}
			{/* Cart com  */}
			{/* Section Title com  */}
			{/* Testimonails  */}
			{/* Footer com  */}
		</div>
	);
}

export default Home
