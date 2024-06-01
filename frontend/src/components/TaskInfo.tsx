import { FC } from "react"
import { XCircleIcon } from "@heroicons/react/24/outline"
import { CheckIcon } from "@heroicons/react/24/outline"


const TaskInfo: FC<{task:TaskInterface, open:boolean, setOpen:any}> = ({ task, open, setOpen }) => {
	console.log('done: ', task.date_added, task.done)
	return (
	<div className="w-full items-center px-4 py-3 text-nude border-nude_pink border-2 rounded-3xl">
		<div className="flex justify-between">
			<h1 className="flex justify-center items-center w-[90%] font-bold text-lg">
				{task.title}
			</h1>
			<XCircleIcon className="text-red-500 h-6 flex justify-end hover:cursor-pointer" 
			onClick={() => setOpen(!open)}/>
		</div>
		<div className="flex justify-between font-bold py-4">
			{task.description}
			{!task.done && <CheckIcon className="text-green-400 w-6"/>}
		</div>
	</div>
  )
}

export default TaskInfo
