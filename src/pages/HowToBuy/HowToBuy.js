import Banner from '../../components/Banner';
import H1 from '../../UI/H1';
import P from '../../UI/P';
import CardsList from './CardsList';

function HowToBuy() {
	let howToBuyHeader = 'Научим покупать в Великобритании!';
	let howToBuySubtitle = 'и экономить до 70%';

	return (
		<>
			<Banner header={howToBuyHeader} paragraph={howToBuySubtitle} isSubtitle bannerType="page" />
			<H1>Покупать в Великобритании очень просто</H1>
			<P>Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.</P>
			<CardsList />
		</>
	);
}

export default HowToBuy;
