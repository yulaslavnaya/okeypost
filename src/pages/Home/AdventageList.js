import Adventage from './Adventage';
import adventages from './data/adventages';
import styles from './Adventage.module.css';

function AdventageList() {
	return (
		<div className={styles.flex_card}>
			{adventages.map((item) => {
				return <Adventage title={item.title} subtitle={item.subtitle} icon={item.icon} key={item.title} />;
			})}
		</div>
	);
}

export default AdventageList;
