import React from 'react';
import ILabel from './label.interface';
import styles from './label.module.scss';

function Label({ text }: ILabel) {
	return <label className={styles.login_label}>{text}</label>;
}

export default Label;
