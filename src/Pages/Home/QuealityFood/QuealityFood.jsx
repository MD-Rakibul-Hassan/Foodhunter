import featuredImage from '../../../assets/home/featured.jpg'
import Section_Title from '../../../Componets/Sheared_Components/Section_Title/Section_Title';
const QuealityFood = () => {
  return (
		<div className='mt-20'>
			<div
				className="hero "
				style={{
					backgroundImage: `url(${featuredImage})`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div>
					<div className='mt-10'>
						<Section_Title title="Quality food" subTitle="--our services--" />
					</div>
					<div className="hero-content flex-col lg:flex-row justify-center gap-5  text-neutral-content py-20">
						<div>
							<img src={featuredImage} alt="" />
						</div>
						<div>
							<p className='text-lg font-medium '>March 20, 2023</p>
							<h3 className='uppercase text-3xl'>Where Can i get some</h3>
							<p className='font-normal tracking-tighter text-md text-slate-300'>
								High-quality foods include unrefined, minimally processed foods
								such as vegetables and fruits, whole grains, healthy fats and
								healthy sources of protein – the foods recommended in the
								Healthy Eating Plate.
							</p>
							<div className='mt-5'>
								<button className='uppercase border-b-2 border-white rounded-md px-4 py-2'>read more</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuealityFood
