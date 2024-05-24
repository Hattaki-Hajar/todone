import { TextField } from "@mui/material";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const AddTask = () => {
	return (
		<div className='h-[30%] w-[90%] flex items-start flex-col px-20 space-y-4'>
			<TextField
			className='bg-nude rounded-sm'
			label="Title"
			variant="standard"
			/>
			<div className='w-[90%] flex justify-between items-end'>
				<TextField
				className='bg-nude rounded-sm w-[90%]'
				label="Description"
				variant="standard"
				/>
				<PlusCircleIcon
				className='w-12 text-nude_pink hover:cursor-pointer'
				/>
			</div>
		</div>
	)
}

export default AddTask;