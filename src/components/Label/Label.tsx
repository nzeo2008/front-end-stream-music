import React from 'react';
import ILabel from './label.interface';
import styles from './label.module.scss';

function Label({ label }: ILabel) {
	return <label className={styles.login_label}>{label}</label>;
}

export default Label;
