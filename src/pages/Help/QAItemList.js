import QAItem from './QAItem';
import questions from './data/questions';
import H1 from '../../UI/H1';

function QAItemList() {
	return (
		<div>
			{questions.map((item) => {
				return (
					<>
						<H1 key={item.category}>{item.category}</H1>
						{item.items.map((qa) => {
							//console.log(qa);
							return <QAItem content={qa} />;
						})}
					</>
				);
			})}
		</div>
	);
}

export default QAItemList;
