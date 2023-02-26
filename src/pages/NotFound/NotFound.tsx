import React from 'react';
import styles from './notfound.module.scss';

function NotFound() {
	return (
		<main className={styles.main_wrapper}>
			<h1>Что-то пошло не так!</h1>
			<p>Запрашиваемая Вами страница не найдена</p>
			<span>404</span>
		</main>
	);
}

export default NotFound;
