import { Icon } from '../../components/Icon';
import styles from './Card.module.css';
import P from '../../UI/P';

function Card({ number, title, text, img }) {
	return (
		<div className={styles.card}>
			<img src={img} alt="" width="290px" height="290px" />
			<div className={styles.header}>
				<div className={styles.number}>{number}</div>
				<Icon />
				<div className={styles.title}>{title}</div>
			</div>
			<P>{text}</P>
		</div>
	);
}

export default Card;
