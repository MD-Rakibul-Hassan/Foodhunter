import useGet_Open_Data from "../../../Hooks/Axios_open/useGet_Open_Data";
import useGet_Menu from "../../../Hooks/Get_Menu/useGet_Menu";

const Menu_Item = ({ item,style }) => {
	return (
		<div
			className={`container mx-auto ${style} grid-clos-1 lg:grid grid-cols-2  px-10  justify-center items-center`}
		>
			{item &&
				item?.map((menuItem) => {
					const { _id, image, name, recipe } = menuItem;
					return (
						<div key={_id} className="flex gap-2 my-2">
							<div>
								<img
									src={image}
									className="w-20 rounded-r-full rounded-b-full"
								/>
							</div>
							<div>
								<h3>{name} ---------</h3>
								<p>{recipe}</p>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Menu_Item;
