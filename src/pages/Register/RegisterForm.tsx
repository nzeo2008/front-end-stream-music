import React from 'react';
import Form from '../../components/Form/Form';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import styles from './register-form.module.scss';
import { Link } from 'react-router-dom';

function RegisterForm() {
	return (
		<main className={styles.main_wrapper}>
			<div className={styles.main_wrapper_text_block}>
				<h1>Создание нового аккаунта</h1>
				<h3>
					Присоединись к нашему сообществу и открой для себя много
					нового!
				</h3>
			</div>
			<div className={styles.main_wrapper_form_container}>
				<Form>
					<InputField type="text" label="Имя" />
					<InputField type="text" label="Фамилия" />
					<InputField type="text" label="Email" />
					<InputField type="password" label="Пароль" />
					<InputField type="password" label="Повторите пароль" />
					<Button text="Создать аккаунт" isDisabled={false} />
				</Form>
				<span>Подтверждение будет выслано на Ваш email</span>
				<span>
					Войти с помощью или <Link to="/">вернуться на главную</Link>
					?
				</span>
				<div
					className={
						styles.main_wrapper_form_container_auth_links_container
					}
				>
					<div
						className={
							styles.main_wrapper_form_container_image_container
						}
					>
						<img
							src="../../public/assets/icons/icons8-google-96.png"
							alt="GoogleIcon.png"
						/>
					</div>
					<div
						className={
							styles.main_wrapper_form_container_image_container
						}
					>
						<img
							src="../../public/assets/icons/icons8-вконтакте-96.png"
							alt="VkIcon.png"
						/>
					</div>
				</div>
			</div>
		</main>
	);
}

export default RegisterForm;
