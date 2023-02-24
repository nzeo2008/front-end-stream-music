import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login-form.module.scss';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';

function LoginForm(): JSX.Element {
	return (
		<main className={styles.main}>
			<div className={styles.main_wrapper}>
				<div className={styles.main_wrapper_header}>
					<Link to="/" className={styles.main_wrapper_header_link}>
						<span>RECORD</span>
					</Link>
				</div>
				<div className={styles.main_wrapper_form_container}>
					<div
						className={
							styles.main_wrapper_form_container_login_form
						}
					>
						<Form>
							<InputField type="email" text="Email" />
							<InputField type="password" text="Пароль" />
							<Button text="Войти" />
						</Form>
						<div
							className={
								styles.main_wrapper_form_container_login_form_text_section
							}
						>
							<Link to="">
								<span>Забыли пароль?</span>
							</Link>
						</div>
					</div>
					<div
						className={
							styles.main_wrapper_form_container_text_block
						}
					>
						<h1>Впервые здесь?</h1>
						<h3>Тогда попробуй наш сервис абсолютно бесплатно!</h3>
						<Link to="../register">
							<Button text="Создать аккаунт" />
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}

export default LoginForm;
