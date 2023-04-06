import logo from '../img/logo.png';
import { HandySvg } from 'handy-svg';
import IconChat from '../img/chat.svg';
import IconWhatsUp from '../img/whatsup.svg';
import IconViber from '../img/viber.svg';
import styles from './Footer.module.css';

function Footer() {
	const date = new Date();

	return (
		<div>
			<div className={styles.main_footer_container}>
				<div className={styles.img_column}>
					<img src={logo} alt="" />
					<div className={styles.icons_row}>
						<div className={styles.whatsup_icon}>
							<HandySvg src={IconWhatsUp} className={styles.icon} />
						</div>
						<div className={styles.viber_icon}>
							<HandySvg src={IconViber} className={styles.icon} />
						</div>
						<div className={styles.chat_icon}>
							<HandySvg src={IconChat} className={styles.icon} />
						</div>
					</div>
				</div>
				<div className={styles.text_column}>
					<h1>О компании</h1>
					<p>Услуги</p>
					<p>Цены</p>
					<p>Отзывы</p>
					<p>Контакты</p>
					<p>Вакансии</p>
					<p>Соглашение о персональных данных</p>
					<p>Условия использования</p>
				</div>
				<div className={styles.text_column}>
					<h1>Полезное</h1>
					<p>Как работает наш сервис</p>
					<p>Как покупать с оператором</p>
					<p>Ответы на частые вопросы</p>
					<p>Популярные магазины</p>
					<p>Черный список магазинов</p>
					<p>Актуальные распродажи</p>
				</div>
				<div className={styles.text_column}>
					<h1>Спецпроекты</h1>
					<p>50% на первую доставку</p>
					<p>Скидки для постоянных клиентов</p>
					<p>Реферальная программа</p>
					<p>Кэшбек Mr. Rebates и Rakuten</p>
					<p>Stop Fraud </p>
				</div>
			</div>
			<p className={styles.end_of_page}>© {date.getFullYear()} Okeypost . Все права защищены.</p>
		</div>
	);
}

export default Footer;
