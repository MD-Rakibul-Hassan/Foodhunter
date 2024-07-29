import Overlay from "../../Componets/Sheared_Components/Overlay/Overlay";
import menu_banner from "../../assets/menu/banner3.jpg";
import useGet_Menu from "../../Hooks/Get_Menu/useGet_Menu";
import Menu_Item from "../../Componets/Sheared_Components/Menu_Item/Menu_Item";
import Section_Title from "../../Componets/Sheared_Components/Section_Title/Section_Title";
import dessertImg  from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg  from '../../assets/menu/pizza-bg.jpg'
import saladImg  from '../../assets/menu/salad-bg.jpg'
import soupImg  from '../../assets/menu/soup-bg.jpg'
const Our_Menu = () => {
	const { salads, dessert, pizza, soup, offered, drinks } = useGet_Menu();
    const menu_item = [
        { item: salads, img: saladImg },
        { item: dessert, img: dessertImg },
        { item: soup, img: soupImg },
        { item: pizza, img: pizzaImg },
    ];
	return (
		<div>
			<Overlay
				img={menu_banner}
				title="OUR MENU"
				decription="Would you like to try a dish"
				overlayStyle=" bg-black opacity-50"
			/>
			<div className="container mx-auto">
                {menu_item?.map((menuItem, index) => {
					return (
						<>
							<div className="mt-16">
								<Section_Title
									key={index}
									title={menuItem?.item[index]?.category}
									subTitle="--Don't miss--"
								/>
							</div>
							<Menu_Item
								key={index}
								item={menuItem.item}
								txt="Order your favourite food"
							/>
                            <Overlay
                                style='mt-10'
								img={menuItem.img}
								title={menuItem?.item[index]?.category}
                                decription="This blank recipe book is a great way to collect and write down all of the family recipes that you love to eat. The book is divided into several categories such as Appetizer"
                                overlayStyle='bg-black p-20 opacity-60'
							/>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Our_Menu;
