import items from './data/items';
import Item from './Item';
import styles from './Item.module.css';

function ItemsList() {
	return (
		<div className={styles.container_large}>
			{items.map((item) => {
				return <Item img={item.img} content={item.content} buttontext={item.buttonText} title={item.title} key={item.title} />;
			})}
		</div>
	);
}

export default ItemsList;
