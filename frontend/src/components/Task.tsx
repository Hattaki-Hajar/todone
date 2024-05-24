import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { FC } from 'react';

const Task: FC<{task:TaskInterface}> = ({task}) => {
	const delete_task = async (title: string) => {
		try {
			const response = await fetch("http://127.0.0.1:8000/task/delete/" + title, {
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
	}
	
	return (
		<div className='w-[80%] border-2 h-[10%] border-nude rounded-3xl bg-slate-950 flex items-center justify-between p-10'>
			<div className='font-bold text-nude hover:cursor-pointer'>
				<span onClick={() => console.log('all good')}>
					{task.title}
				</span>
			</div>
			<div className='w-[50%] flex justify-end space-x-4'>
				<PencilSquareIcon
				className="h-6 w-6 text-nude_pink hover:cursor-pointer"
				onClick={() => console.log("from edit icon")}
				/>
				<TrashIcon
				className="h-6 w-6 text-nude_pink hover:cursor-pointer"
				onClick={() => delete_task(task.title)}
				/>
			</div>
		</div>
	)
}

export default Task;

