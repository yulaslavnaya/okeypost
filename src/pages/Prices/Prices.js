import ItemsList from './ItemsList';
import H1 from '../../UI/H1';
import P from '../../UI/P';
import Calculator from '../../components/Calculator';
import Banner from '../../components/Banner';
import DeliveryList from '../Home/DeliveryList';

function Prices() {
	let header = 'Услуги доставки из Великобритании';

	return (
		<div>
			<Banner header={header} bannerType="page" />

			<ItemsList />
			<H1>Онлайн-калькулятор стоимости доставки товара</H1>
			<P>Задайте необходимые параметры посылки, и калькулятор рассчитает приблизительную стоимость доставки вашей посылки из Англии.</P>
			<Calculator />
			<H1>Варианты доставки:</H1>
			<DeliveryList />
		</div>
	);
}

export default Prices;
