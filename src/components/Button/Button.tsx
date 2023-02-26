import React from 'react';
import IButton from './button.interface';
import styles from './button.module.scss';

function Button({ text, isDisabled }: IButton): JSX.Element {
	return (
		<button className={styles.login_btn} disabled={isDisabled}>
			{text}
		</button>
	);
}

export default Button;
