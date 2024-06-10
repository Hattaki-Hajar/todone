import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import DoneTasks from './components/DoneTasks'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
		main: '#C17779',
		},
	},
});

function App() {
	const [tasks, setTasks] = useState<TaskInterface[]>([]);
	const [update, setUpdate] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://127.0.0.1:8000/task/get/");
				const data = await response.json();
				setTasks(data);
				setUpdate(false);
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, [update]);

	const calculateTasks = () => {
		let count = 0;
		tasks.map((task) => task.done && count++)
		return count;
	}
	const count = tasks.length;
	const doneTasks = calculateTasks();

	return (
		<ThemeProvider theme={theme}>
			<div className='bg-black h-[80%] w-[80%] sm:w-[95%] sm:h-[95%] rounded-3xl'>
				<Header />
				<div className='h-full flex justify-between'>
					<DoneTasks count={count} doneTasks={doneTasks}/>
					<div className='w-[50%] flex-col justify-between'>
						<AddTask setUpdate={setUpdate}/>
						<Tasks tasks={tasks} setUpdate={setUpdate}/>
					</div>
				</div>
			</div>
		</ThemeProvider>
	)
}

export default App;
