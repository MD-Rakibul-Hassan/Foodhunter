
import useGet_Open_Data from "../Axios_open/useGet_Open_Data"

const useGet_Menu = () => {
	const data = useGet_Open_Data('./menu.json')
	const salads = data.filter((salad, index) => salad.category === "salad")
	const dessert = data.filter((salad, index) => salad.category === "dessert");
	const pizza = data.filter((salad, index) => salad.category === "pizza");
	const soup = data.filter((salad, index) => salad.category === "soup");
	const offered = data.filter((salad, index) => salad.category === "offered");
	const popular = data.filter((salad, index) => salad.category === "popular");
    const drinks = data.filter((salad, index) => salad.category === "drinks");
    return {data,salads,dessert,pizza,soup,offered,popular,drinks}
}

export default useGet_Menu
