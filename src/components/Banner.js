import { HandySvg } from 'handy-svg';
import { useState } from 'react';
import styles from './Banner.module.css';
import Button from '../UI/Button';
import IconChat from '../img/chat.svg';
import IconWhatsUp from '../img/whatsup.svg';
import IconViber from '../img/viber.svg';
import ModalWindow from './ModalWindow';

function Banner({ header, paragraph, buttontext, img, bannerType, isSubtitle = false }) {
	let Banner = null;

	const [visibleModal, setVisibleModal] = useState(false);
	const onClose = () => setVisibleModal(false);

	switch (bannerType) {
		case 'main':
			Banner = (
				<>
					<div className={styles.textBlock}>
						<h1 className={styles.header}>{header}</h1>
						<p className={styles.par}>{paragraph}</p>
						<Button
							onClick={() => {
								setVisibleModal(true);
							}}
						>
							{' '}
							{buttontext}{' '}
						</Button>
					</div>
					<img className={styles.logo} src={img} alt="" />
				</>
			);
			break;
		case 'info':
			Banner = (
				<>
					<img className={styles.logoInfo} src={img} alt="" />
					<div className={styles.textBlockInfo}>
						<h1 className={styles.info_header}>{header}</h1>
						<p className={styles.par}>{paragraph}</p>
						<Button
							onClick={() => {
								setVisibleModal(true);
							}}
						>
							{' '}
							{buttontext}{' '}
						</Button>
					</div>
				</>
			);
			break;
		case 'page':
			Banner = (
				<div className={styles.text_block_page}>
					<h1>{header}</h1>
					{isSubtitle ? (
						<>
							<h2>{paragraph}</h2>
							<Button
								onClick={() => {
									setVisibleModal(true);
								}}
							>
								{' '}
								Получить адрес в UK
							</Button>
						</>
					) : (
						<></>
					)}
				</div>
			);
			break;
		case 'socnet':
			Banner = (
				<div className={styles.text_block_soc_net}>
					<h1 className={styles.header_soc_net}>Остались вопросы? Спросите нас в соцсетях!</h1>
					<div className={styles.icons_soc_net}>
						<HandySvg src={IconViber} className={styles.icon} />
						<HandySvg src={IconWhatsUp} className={styles.icon} />
						<HandySvg src={IconChat} className={styles.icon} />
					</div>
				</div>
			);
			break;
		default:
			Banner = null;
	}

	return (
		<>
			<div className={styles.banner}>{Banner}</div>
			<ModalWindow visible={visibleModal} onClose={onClose} modalType="getaddress" />
		</>
	);
}

export default Banner;
