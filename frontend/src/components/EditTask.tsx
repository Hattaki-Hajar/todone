import { XCircleIcon } from "@heroicons/react/24/outline"
import { FC, useState } from "react"
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';

const EditTask:FC<{setEdit: any, task:TaskInterface}> = ({ setEdit, task }) => {
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	const sendUpdate = async() => {
		const data = {
			'title': title.length > 0 ? title : "",
			'description': description.length > 0 ? title : "",
		};
		try {
			const URL = "http://127.0.0.1:8000/task/update/" + task.id;
			const responce = await fetch(URL, {
				method: 'PATCH',
				mode: 'cors',
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (responce.ok)
				console.log('patch2 all good');
			else
				console.log('patch2 failed');
		}
		catch(error) {
			console.log('patch2 error: ', error);
		}
	}

	return (
		<div className="w-full items-center px-4 py-3 text-nude border-nude_pink border-2 rounded-3xl">
			<div className="flex justify-between">
				<h1 className="flex justify-center items-center w-[90%] font-bold text-lg">
				</h1>
				<XCircleIcon className="text-red-500 h-6 flex justify-end hover:cursor-pointer" 
				onClick={() => setEdit(false)}/>
			</div>
			<div className="flex flex-col space-y-2">
				<TextField 
				className="w-[50%] bg-nude rounded-lg"
				label="Title"
				variant="filled"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				/>
				<TextField
				className="bg-nude rounded-lg"
				label="Description"
				variant="filled"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className="p-2 flex justify-end">
				<Button
				className="hover:cursor-pointer"
				variant="contained"
				onClick={() => console.log('meh')}
				disabled={!title.length && !description.length}
				>
					Submit
				</Button>
			</div>
		</div>
	)
}

export default EditTask