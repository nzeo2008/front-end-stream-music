import React from 'react';
import IForm from './form.interface';
import styles from './form.module.scss';

function Form({ children }: IForm): JSX.Element {
	return <form className={styles.form_container}>{children}</form>;
}

export default Form;
