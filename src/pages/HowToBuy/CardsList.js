import Card from './Card';
import cards from './data/cards';
import Button from '../../UI/Button';
import styles from './Card.module.css';

function CardsList() {
	return (
		<div className={styles.card_list}>
			{cards.map((card) => {
				return <Card number={card.number} title={card.title} text={card.text} img={card.img} key={card.title} />;
			})}
			<Button>Получить адрес в UK</Button>
		</div>
	);
}

export default CardsList;
