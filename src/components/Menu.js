import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../img/logo.png';
import styles from './Menu.module.css';
import { BsPerson } from 'react-icons/bs';
import ModalWindow from '../components/ModalWindow';

const Menu = () => {
	const [visibleModal, setVisibleModal] = useState(false);
	const onClose = () => setVisibleModal(false);
	return (
		<>
			<nav className={styles.nav_menu}>
				<NavLink to="." end>
					<img src={logo} alt="" height="50" />
				</NavLink>
				<NavLink to="howToBuy">
					<div>Как покупать</div>
				</NavLink>
				<NavLink activeClassName="active" to="sales" exact>
					<div>Распродажи</div>
				</NavLink>
				<NavLink activeClassName="active" to="prices" exact>
					<div>Цены</div>
				</NavLink>
				<NavLink to="help">
					<div>Помощь</div>
				</NavLink>
				<NavLink to="bonuses">
					<div>Бонусы</div>
				</NavLink>
				<button className={styles.login_btn}>
					<BsPerson className={styles.login_icon} /> Вход
				</button>
				<button
					className={styles.call_btn}
					onClick={() => {
						setVisibleModal(true);
					}}
				>
					Связаться с нами
				</button>
			</nav>
			<ModalWindow visible={visibleModal} onClose={onClose} modalType="login" />
		</>
	);
};

export default Menu;
