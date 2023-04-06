import styles from './P.module.css';

function P(props) {
	const { children } = props;
	return (
		<p {...props} className={styles.main}>
			{children}
		</p>
	);
}

export default P;
