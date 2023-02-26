import React from 'react';
import styles from './categories.module.scss';

function Categories() {
	return (
		<main className={styles.main_wrapper}>
			<section className={styles.main_wrapper_text_block}>
				<h1>Жанры</h1>
				<p></p>
			</section>
			<section className={styles.main_wrapper_music_genres}>
				<div
					className={styles.main_wrapper_music_genres_text_section}
				></div>
				<div
					className={styles.main_wrapper_music_genres_cards_section}
				></div>
			</section>
		</main>
	);
}

export default Categories;
