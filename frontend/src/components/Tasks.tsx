import { useState, useEffect } from "react";
import Task from "./Task";

const Tasks = () => {
	const [tasks, setTasks] = useState<TaskInterface[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://127.0.0.1:8000/task/get/");
				const data = await response.json();
				setTasks(data);
				console.log('data: ', data);
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="h-[65%] flex px-10 py-32 items-center flex-col space-y-4">
			{tasks.map((task,i) => (
				<Task key={i} task={task} />
			))}
		</div>
	);
};

export default Tasks;
