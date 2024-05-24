import TaskCount from "./TaskCount"


const DoneTasks = () => {
	return (
		<div className='w-[50%] flex justify-center items-center'>
			<div className='w-[75%] h-[55%] border-4 border-nude rounded-3xl flex items-center p-5'>
				<div className='w-[50%] h-[100%] flex items-center justify-center flex-col'>
					<h1 className='font-semibold text-nude_pink text-5xl'>
						TASKS DONE</h1>
					<p className='text-nude font-semibold'>
						keep it up
					</p>
				</div>
				<div className='w-[50%] h-[100%] text-blue-50 flex justify-center items-center'>
					<TaskCount />
				</div>
			</div>
		</div>
	)
}

export default DoneTasks