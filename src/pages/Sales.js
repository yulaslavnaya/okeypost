import Banner from '../components/Banner';
import H1 from '../UI/H1';

function Sales() {
	let SaleHeader = 'Распродажи';
	let SaleSubtitle = 'ранний доступ к распродажам в магазинах';

	return (
		<>
			<Banner header={SaleHeader} paragraph={SaleSubtitle} isSubtitle bannerType="page" />
			<H1>Black Friday Early Access ранний доступ к распродажам в магазинах Великобритании!</H1>
		</>
	);
}

export default Sales;
