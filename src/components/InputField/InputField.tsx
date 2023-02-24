import React from 'react';
import Input from '../Input/Input';
import Label from '../Label/Label';
import IInputField from './inputField.interface';
import styles from './inputField.module.scss';

function InputField({ type, text }: IInputField) {
	return (
		<div className={styles.input_field_container}>
			<Label text={text} />
			<Input type={type} />
		</div>
	);
}

export default InputField;
