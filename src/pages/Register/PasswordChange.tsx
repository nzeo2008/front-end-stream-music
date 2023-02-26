import React from 'react';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import styles from './password-change.module.scss';
import { Link } from 'react-router-dom';

function PasswordChange() {
	return (
		<main className={styles.main_wrapper}>
			<h1>Смена пароля</h1>
			<p>RECORD</p>
			<div className={styles.main_wrapper_form}>
				<Form>
					<InputField type="text" label="Email" />
					<InputField type="password" label="Новый пароль" />
					<InputField type="password" label="Повторите пароль" />
					<Button text="Изменить пароль" isDisabled={false} />
				</Form>
				<span>
					Вернутся <Link to="/">домой</Link>?
				</span>
			</div>
		</main>
	);
}

export default PasswordChange;
