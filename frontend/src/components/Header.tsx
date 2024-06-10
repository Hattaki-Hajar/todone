import cat from '../assets/cat.png'


const Header = () => {
  return (
		<div className='h-[15%] flex items-center px-20 justify-between'>
			<img
			className='h-[80%] w-[7%] bg-nude rounded-full items-center'
			src={cat}
			/>
			<h1 className='text-nude_pink font-bold text-6xl sm:text-3xl'>
				TO
				<span className='text-nude font-bold text-6xl sm:text-3xl'>
					DONE
				</span>
			</h1>
		</div>
  )
}

export default Header;
