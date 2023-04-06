import Button from '../UI/Button';
import styles from './ModalWindow.module.css';
import close from '../img/Закрыть.png';

function ModalWindow({ visible = false, onClose, modalType }) {
	if (!visible) return null;

	let Modal = null;

	switch (modalType) {
		case 'login':
			Modal = (
				<>
					<h1>Выполните вход в ваш личный кабинет</h1>
					<p>Номер телефона:</p>
					<input></input>
					<p>Ваш email:</p>
					<input></input>
					<p>Ваш пароль:</p>
					<input></input>
					<Button>Войти</Button>
				</>
			);
			break;
		case 'getaddress':
			Modal = (
				<>
					<h1>Начните совершать покупки в английских магазинах</h1>
					<p>Имя:</p>
					<input></input>
					<p>Фамилия:</p>
					<input></input>
					<p>Email:</p>
					<input></input>
					<Button>Получить адрес в UK</Button>
				</>
			);
			break;
		default:
			Modal = null;
	}

	return (
		<div className={styles.main} onClick={onClose}>
			<div onClick={onClose} className={styles.close}>
				<img src={close} alt="" />
			</div>
			<div className={styles.window} onClick={(e) => e.stopPropagation()}>
				{Modal}
			</div>
		</div>
	);
}

export default ModalWindow;
