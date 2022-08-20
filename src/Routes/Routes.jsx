import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Base from '../views/Base/Base';

export default function Rota() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/base' element={<Base/>} />
		</Routes>
	);
};
