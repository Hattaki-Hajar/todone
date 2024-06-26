import { TextField } from "@mui/material";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState, FC } from "react";

const AddTask:FC<{setUpdate: any}> = ({setUpdate}) => {
	const [ title, setTitle ] = useState<string>('');
	const [ description, setDescription ] = useState<string>('');
	const sendData = async () => {
		console.log('sending data');
		const data = {
			'title': title,
			'description': description,
		};
			try {
				const response = await fetch("http://127.0.0.1:8000/task/add/", {
				method: 'POST',
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data)
			});
			if (response.ok)
				setUpdate(true);
			else
				console.log('failed');
		}
		catch(error) {
			console.log('error: ', error);
		}
	}

	return (
		<div className='h-[30%] w-[90%] flex items-start flex-col px-20 space-y-4'>
			<TextField
			className='bg-nude rounded-lg'
			label="Title"
			variant="filled"
			value={ title }
			onChange={(e) => setTitle(e.target.value)}
			/>
			<div className='w-[90%] flex justify-between items-end'>
				<TextField
				className='bg-nude rounded-lg w-[90%]'
				label="Description"
				variant="filled"
				value={ description }
				onChange={ (e) => setDescription(e.target.value) }
				/>
				<PlusCircleIcon
				className='w-12 text-nude_pink hover:cursor-pointer'
				onClick={() => {title && description ? sendData() : console.log('error: ', title, description)}}
				/>
			</div>
		</div>
	)
}

export default AddTask;