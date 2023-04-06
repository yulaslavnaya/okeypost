import styles from './Adventage.module.css';

function Adventage({ icon, title, subtitle }) {
	return (
		<div className={styles.card}>
			<img src={icon} alt="" />
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.subtitle}>{subtitle}</p>
		</div>
	);
}

export default Adventage;
