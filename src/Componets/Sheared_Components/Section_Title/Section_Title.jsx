import React from "react";

const Section_Title = ({ title, subTitle }) => {
	return (
		<div className="my-5">
			<div className="container w-full flex flex-col justify-center  mx-auto ">
				<div className="flex items-center w-full flex-col">
					<p className="font-semibold text-yellow-400">{subTitle ? subTitle : "--Subtitle here--"}</p>
					<div className="bg-slate-500 h-[4px] w-[300px] my-2"></div>
					<h1 className=" text-2xl lg:text-4x font-bold my-3 uppercase">{title ? title : "Title here"}</h1>
					<div className="bg-slate-500 h-[4px] w-[300px] my-2"></div>
				</div>
			</div>
		</div>
	);
};

export default Section_Title;
