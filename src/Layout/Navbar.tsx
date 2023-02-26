import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss';
import CottageOutlined from '@mui/icons-material/CottageOutlined';
import LayersOutlined from '@mui/icons-material/LayersOutlined';
import DynamicFeedOutlined from '@mui/icons-material/DynamicFeedOutlined';
import OndemandVideoOutlined from '@mui/icons-material/OndemandVideoOutlined';
import CalendarMonthOutlined from '@mui/icons-material/CalendarMonthOutlined';
import NewspaperOutlined from '@mui/icons-material/NewspaperOutlined';
import PeopleOutlineOutlined from '@mui/icons-material/PeopleOutlineOutlined';
import PhotoCameraOutlined from '@mui/icons-material/PhotoCameraOutlined';

function Navbar() {
	return (
		<nav className={styles.navbar_wrapper}>
			<ul>
				<NavLink to="/">
					<CottageOutlined />
					<li>Домой</li>
				</NavLink>
				<NavLink to="categories">
					<LayersOutlined />
					<li>Категории</li>
				</NavLink>
				<NavLink to="albums">
					<DynamicFeedOutlined />
					<li>Альбомы</li>
				</NavLink>
				<NavLink to="videos">
					<OndemandVideoOutlined />
					<li>Видео</li>
				</NavLink>
				<NavLink to="events">
					<CalendarMonthOutlined />
					<li>Мероприятия</li>
				</NavLink>
				<NavLink to="gallery">
					<PhotoCameraOutlined />
					<li>Галлерея</li>
				</NavLink>
				<NavLink to="blog">
					<NewspaperOutlined />
					<li>Блог</li>
				</NavLink>
				<NavLink to="artists">
					<PeopleOutlineOutlined />
					<li>Исполнители</li>
				</NavLink>
			</ul>
		</nav>
	);
}

export default Navbar;
