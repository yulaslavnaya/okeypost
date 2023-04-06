import { BiWorld } from 'react-icons/bi';
import { FaCity, FaRegEdit } from 'react-icons/fa';
import { TbNotebook, TbWeight } from 'react-icons/tb';
import Button from '../UI/Button';
import styles from './Calculator.module.css';

function Calculator() {
	return (
		<div className={styles.main_container}>
			<div className={styles.flex_container}>
				<div className={styles.wrapper}>
					<p className={styles.title}>Страна:</p>
					<BiWorld className={styles.icon} />
					<select className={styles.select}>
						<option>Казахстан</option>
						<option>Грузия</option>
						<option>Беларусь</option>
						<option>Россия</option>
						<option>Украина</option>
					</select>
				</div>
				<div className={styles.wrapper}>
					<p className={styles.title}>Город:</p>
					<FaCity className={styles.icon} />
					<input className={styles.select} placeholder="Москва" />
				</div>
				<div className={styles.wrapper}>
					<p className={styles.title}>Индекс:</p>
					<TbNotebook className={styles.icon} />
					<input className={styles.select} placeholder="Введите индекс" />
				</div>
				<div className={styles.wrapper}>
					<p className={styles.title}>Вес посылки:</p>
					<TbWeight className={styles.icon} />
					<input className={styles.select} placeholder="0,5" />
				</div>
				<div className={styles.wrapper}>
					<p className={styles.title}>Дополнительные услуги:</p>
					<FaRegEdit className={styles.icon} />
					<select className={styles.select}>
						<option>Выберите услугу</option>
						<option>Дополнительная упаковка</option>
						<option>Заполнение декларации</option>
						<option>Упаковка xрупкиx предметов</option>
						<option>Разделение заказа</option>
						<option>Экспресс сборка</option>
					</select>
				</div>
			</div>
			<Button>Рассчитать</Button>
		</div>
	);
}

export default Calculator;
