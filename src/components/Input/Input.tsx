import React from 'react';
import IInput from './input.interface';
import styles from './input.module.scss';

function Input({ type }: IInput): JSX.Element {
	return <input className={styles.input_label} type={type} />;
}

export default Input;
