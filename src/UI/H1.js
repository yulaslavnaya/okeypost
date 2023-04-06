import styles from './H1.module.css';

function H1(props) {
	const { children } = props;
	return (
		<h1 {...props} className={styles.main}>
			{children}
		</h1>
	);
}

export default H1;
