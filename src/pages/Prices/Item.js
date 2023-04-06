import styles from './Item.module.css';

function Item({ img, title, content, buttontext }) {
	return (
		<div className={styles.container}>
			<img src={img} alt="" />
			<div className={styles.title}>{title}</div>
			<div className={styles.content}>{content}</div>
			<button className={styles.btn}>{buttontext}</button>
		</div>
	);
}

export default Item;
