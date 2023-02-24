import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

function AppLayout(): JSX.Element {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default AppLayout;
