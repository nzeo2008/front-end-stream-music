import React from 'react';
import Input from '../Input/Input';
import Label from '../Label/Label';
import IInputField from './inputField.interface';
import styles from './inputField.module.scss';
import RemoveRedEyeOutlined from '@mui/icons-material/RemoveRedEyeOutlined';
import ErrorOutlined from '@mui/icons-material/ErrorOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';
import CheckCircleOutlineOutlined from '@mui/icons-material/CheckCircleOutlineOutlined';

function InputField({ type, label }: IInputField) {
	return (
		<div className={styles.input_container}>
			<div className={styles.input_container_field}>
				<Input type={type} />
				<Label label={label} />
				<CheckCircleOutlineOutlined
					className={styles.input_container_field_neutral_icon}
				/>
			</div>
		</div>
	);
}

export default InputField;
