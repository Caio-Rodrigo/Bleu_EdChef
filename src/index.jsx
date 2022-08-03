import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from '../src/components/Navigation/index';
// import Menu from '../src/components/Menu/index';
import './index.css';
import Home from 'components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Navigation />
		<Home />
	</React.StrictMode>,
);
