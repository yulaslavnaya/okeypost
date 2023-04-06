import { Icon } from '../../components/Icon';
import { HandySvg } from 'handy-svg';
import IconMore from '../Help/data/Vector 50.svg';
import styles from './DeliveryCards.module.css';

function DeliveryCard({ icon, name, terms, cost }) {
	return (
		<div className={styles.card_container}>
			<div className={styles.name_container}>
				<img src={icon} alt="" />
				<h1 className={styles.name}>{name}</h1>
				<Icon />
			</div>
			<div className={styles.small_container}>
				<div className={styles.text_block}>
					<p>Сроки:</p>
					<h2>{terms}</h2>
				</div>
				<Icon />
			</div>
			<div className={styles.small_container}>
				<div className={styles.text_block}>
					<p>Стоимость доставки:</p>
					<h2>{cost}</h2>
				</div>
				<Icon />
			</div>
			<div className={styles.small_container}>
				<div className={styles.text_block}>
					<p>Итого:</p>
					<h2>£0.00</h2>
				</div>
				<Icon />
			</div>
			<div>
				<div className={styles.icon_block}>
					<HandySvg src={IconMore} className={styles.icon} />
				</div>
			</div>
		</div>
	);
}

export default DeliveryCard;
