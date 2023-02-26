import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import LoginForm from './pages/Login/LoginForm';
import NotFound from './pages/NotFound/NotFound';
import RegisterForm from './pages/Register/RegisterForm';
import PasswordChange from './pages/Register/PasswordChange';
import Categories from './pages/Categories/Categories';
import Albums from './pages/Albums/Albums';
import Events from './pages/Events/Events';
import Videos from './pages/Videos/Videos';
import Gallery from './pages/Gallery/Gallery';
import Blog from './pages/Blog/Blog';
import Artists from './pages/Artists/Artists';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="categories" element={<Categories />} />
					<Route path="albums" element={<Albums />} />
					<Route path="videos" element={<Videos />} />
					<Route path="events" element={<Events />} />
					<Route path="gallery" element={<Gallery />} />
					<Route path="blog" element={<Blog />} />
					<Route path="artists" element={<Artists />} />
					<Route path="*" element={<NotFound />} />
				</Route>
				<Route path="login" element={<LoginForm />} />
				<Route path="register" element={<RegisterForm />} />
				<Route path="password-change" element={<PasswordChange />} />
			</Routes>
		</>
	);
}

export default App;
