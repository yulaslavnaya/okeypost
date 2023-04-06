import DeliveryCard from './DeliveryCard';
import deliveries from './data/deliveries';

function DeliveryList() {
	return (
		<div>
			{deliveries.map((item) => {
				return <DeliveryCard icon={item.icon} name={item.name} cost={item.cost} terms={item.terms} key={item.name} />;
			})}
		</div>
	);
}

export default DeliveryList;
