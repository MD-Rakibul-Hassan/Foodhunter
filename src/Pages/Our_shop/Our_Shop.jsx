import { Link } from 'react-router-dom';
import our_shop from '../../assets/shop/banner2.jpg'
import Overlay from '../../Componets/Sheared_Components/Overlay/Overlay'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from 'react';
import useGet_Menu from '../../Hooks/Get_Menu/useGet_Menu';
import Cart from '../../Componets/Sheared_Components/Card/Cart';
const Our_Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const { salads,dessert,pizza,soup } = useGet_Menu();
    
  return (
		<div>
			<div>
				<Overlay
					img={our_shop}
					title="Our Shop"
					overlayStyle="bg-black p-20 opacity-60"
					decription="Would you like to try dish"
				/>
			</div>
			<div className='container mx-auto mt-10'>
				<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
					<TabList className='flex justify-center my-5 '>
						<Tab >Salad</Tab>
						<Tab>Soup</Tab>
						<Tab>Dessert</Tab>
						<Tab>Pizza</Tab>
					</TabList>
					<TabPanel>
						<Cart cardItem={salads} />
					</TabPanel>
					<TabPanel>
						<Cart cardItem={soup} />
					</TabPanel>
					<TabPanel>
						<Cart cardItem={dessert} />
					</TabPanel>
					<TabPanel>
						<Cart cardItem={pizza} />
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
}

export default Our_Shop
