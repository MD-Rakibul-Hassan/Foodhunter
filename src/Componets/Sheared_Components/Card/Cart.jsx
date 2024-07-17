import React from "react";

const Cart = ({ cardItem,style }) => {
	return (
		<div className={`${style ? style : 'grid gird-cols-1 lg:grid-cols-3 gap-10'}`}>
			{cardItem &&
                cardItem?.map((cart) => {
                    const { category, image, name, price, recipe, _id } = cart;
					return (
						<div key={_id} className="card ">
							<figure>
								<img src={image} alt="Cart" className="w-full" />
							</figure>
							<div className="">
								<h2 className="text-center my-2 text-xl font-semibold">{name}</h2>
								<p className="text-center my-2 font-normal px-5">{recipe}</p>
								<div className="card-actions justify-center">
									<button className="btn border-t-0 border-l-0 border-r-0 border-b-2 border-yellow-400 text-yellow-400 bg-slate-400 w-full  rounded-md">Add To Cart</button>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Cart;
