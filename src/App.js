import './App.css';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/Nav/NavBar';
import TaiLieu from './components/TaiLieu/TaiLieu';
import KhoLuuTru from './components/KhoLuuTru/KhoLuuTru';
import HomePage from './components/Pages/HomePage';
import HocPhan1 from './components/Pages/HP1';
import HocPhan2 from './components/Pages/HP2';
import HocPhan3 from './components/Pages/HP3';
import HocPhan4 from './components/Pages/HP4';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

function App() {
	const [mode, setMode] = useState('light');
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<NavBar setMode={setMode} mode={mode} />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/tailieu' element={<TaiLieu />}></Route>
				<Route path='/kholuutru' element={<KhoLuuTru />}></Route>
				<Route path='/hp1' element={<HocPhan1 />}></Route>
				<Route path='/hp2' element={<HocPhan2 />}></Route>
				<Route path='/hp3' element={<HocPhan3 />}></Route>
				<Route path='/hp4' element={<HocPhan4 />}></Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
