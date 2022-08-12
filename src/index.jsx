import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/Navigation/index';
import './index.css';
import Home from './components/views/Home/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>,
);
