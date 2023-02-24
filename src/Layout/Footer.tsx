import React from 'react';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import ListAltOutlined from '@mui/icons-material/ListAltOutlined';
import PlayArrowOutlined from '@mui/icons-material/PlayArrowOutlined';
import SkipNextOutlined from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlined from '@mui/icons-material/SkipPreviousOutlined';

function Footer() {
	return (
		<footer className={styles.footer_wrapper}>
			<div className={styles.footer_wrapper_text_block_container}>
				<MenuOutlined />
				<Link to="/">RECORD</Link>
			</div>
			<div className={styles.footer_wrapper_music_player_container}>
				<SkipPreviousOutlined />
				<PlayArrowOutlined />
				<SkipNextOutlined />
				<div></div>
			</div>
			<div className={styles.footer_wrapper_playlist_search_container}>
				<ListAltOutlined />
				<SearchOutlined />
			</div>
			<div className={styles.footer_wrapper_profile_container}>
				<img src="" alt="" />
			</div>
		</footer>
	);
}

export default Footer;
