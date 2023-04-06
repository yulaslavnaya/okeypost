import { HandySvg } from 'handy-svg';
import IconMore from './data/Vector 50.svg';
import styles from './QAItem.module.css';

function QAItem({ content }) {
	return (
		<div className={styles.item}>
			<p>{content}</p>
			<HandySvg className={styles.icon} src={IconMore} />
		</div>
	);
}

export default QAItem;
