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
	// components: {
	// 	MuiInputLabel: {
	// 	  styleOverrides: {
	// 		root: {
	// 		  color: '#F7E3DB',
	// 		},
	// 	  },
	// 	},
	// },
});

function App() {

	return (
		<ThemeProvider theme={theme}>
			<div className='bg-black h-[80%] w-[80%] rounded-3xl'>
				<Header />
				<div className='h-[85%] flex justify-between'>
					<DoneTasks />
					<div className='w-[50%] flex-col justify-between'>
						<AddTask />
						<Tasks />
					</div>
				</div>
			</div>
		</ThemeProvider>
	)
}

export default App;
