import styles from './Button.module.css';

function Button(props) {
	const { children, disabled = false } = props;
	return (
		<button {...props} disabled={disabled} className={styles.main}>
			{children}
		</button>
	);
}

export default Button;
