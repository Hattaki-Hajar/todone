import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { FC, useState } from 'react';
import TaskInfo from "./TaskInfo";
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import EditTask from "./EditTask";

const Task: FC<{task:TaskInterface}> = ({task}) => {
	const delete_task = async () => {
		try {
			const URL = "http://127.0.0.1:8000/task/delete/" + task.id + "/";
			const response = await fetch(URL, {
				method: 'DELETE',
				mode: 'cors',
			});
			if (response.ok) {
				console.log('Resource deleted successfully');
			} else {
				const errorData = await response.json();
				console.error('Failed to delete resource:', errorData);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const [open, setOpen] = useState<boolean>(false);
	const [done, setDone] = useState<boolean>(task.done);
	const [edit, setEdit] = useState<boolean>(false);
	const setProgress = async () => {
		const data = {
			'done': !task.done,
		}
		try {
			const URL = "http://127.0.0.1:8000/task/update/" + task.id + "/";
			const response = await fetch(URL, {
				method: 'PATCH',
				mode: 'cors',
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (response.ok)
				console.log('patch all good');
			else
				console.log('patch failed');
		}
		catch(error) {
			console.log('patch error: ', error);
		}
	};

	const changeDoneState = () => {
		setProgress();
		setDone(!done);
		task.done = !done;
	}

	return (
		<>
			{(!open && !edit) && <div className='w-[80%] border-2 h-[40%] border-nude rounded-3xl bg-slate-950 flex items-center justify-between px-4'
				>
				<div className='w-[90%] h-full font-bold text-nude hover:cursor-pointer flex items-center'>
					{done ?
					<span onClick={changeDoneState}>
						<CircleIcon className="text-green-600"/>
					</span>
					: <span onClick={changeDoneState}>
						<CircleOutlinedIcon className="text-nude_pink"/>
					</span>}
					<span className="p-2 w-full h-full flex items-center"
					onClick={() => setOpen(!open)}>
						{task.title}
					</span>
				</div>
				<div className='w-[10%] flex justify-end space-x-4'>
					<PencilSquareIcon
					className="h-6 w-6 text-nude_pink hover:cursor-pointer"
					onClick={() => setEdit(true)}
					/>
					<TrashIcon
					className="h-6 w-6 text-nude_pink hover:cursor-pointer"
					onClick={() => delete_task()}
					/>
				</div>
			</div>
			}
			<div className='w-[80%] flex items-center justify-center rounded-3xl bg-slate-950'>
			{open && <TaskInfo task={task} open={open} setOpen={setOpen}/>}
			{edit && <EditTask setEdit={setEdit} task={task}/>}
			</div>
		</>
	)
}

export default Task;

