import { FC } from "react";
import Task from "./Task";

const Tasks: FC<{tasks:TaskInterface[], setUpdate: any}>
	= ({tasks, setUpdate}) => {


	return (
		<div className="h-[65%] flex px-10 py-32 items-center flex-col space-y-4">
			{tasks.map((task,i) => (
				<Task key={i} task={task} setUpdate={setUpdate}/>
			))}
		</div>
	);
};

export default Tasks;
