import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/views/Home';

export default function Rota() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			{/* <Route path='/update' element= /> */}
		</Routes>
	);
};
