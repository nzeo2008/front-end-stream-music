import React from 'react';
import IButton from './button.interface';
import styles from './button.module.scss';

function Button({ text }: IButton): JSX.Element {
	return <button className={styles.login_btn}>{text}</button>;
}

export default Button;
