import { FC } from "react";

const TaskCount: FC<{count: number, doneTasks: number}> = ({count, doneTasks}) => {
	return (
		<div className='w-[80%] sm:h-[70%] sm:w-[50%] h-[100%] bg-nude_pink rounded-full flex justify-center items-center'>
			<h1 className='font-bold text-7xl text-nude sm:text-4xl'>
				{doneTasks} / {count}
			</h1>
		</div>
	)
}

export default TaskCount;
