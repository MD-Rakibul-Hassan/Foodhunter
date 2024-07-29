

const Overlay = ({ img, style, overlayStyle, title, decription }) => {
	return (
		<div className={style}>
			<div
				className="hero min-h-[500px]"
				style={{
					backgroundImage: `url(${img})`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-neutral-content text-center">
					<div className={`${overlayStyle} px-14 py-10`}>
						<h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
						<p className="mb-5">
							{decription}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overlay
