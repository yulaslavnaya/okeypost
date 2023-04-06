import React, { useState } from 'react';
import styles from './SearchQA.module.css';
import { BsSearch } from 'react-icons/bs';
import QAItem from './QAItem';
import questions from './data/questions';
import QAItemList from './QAItemList';

function SearchQA() {
	let filterdata = [];
	for (let i = 0; i < questions.length; i++) {
		for (let j = 0; j < questions[i].items.length; j++) {
			filterdata.push(questions[i].items[j]);
		}
	}

	function columnSearch(value, data) {
		value = value.toLowerCase();
		let filterData = [];
		for (let i = 0; i < data.length; i++) {
			let fio = data[i].toLowerCase();
			if (fio.includes(value)) {
				filterData.push(data[i]);
			}
		}

		console.log(filterData);
		return filterData;
	}

	const [input, setInput] = useState('');
	const [qa, setQA] = useState(filterdata);

	return (
		<>
			<div className={styles.container}>
				<p>Поиск в вопросах и ответах:</p>
				<BsSearch className={styles.search_icon} />
				<input
					placeholder="Введите свой вопрос..."
					onChange={(event) => {
						setInput(event.target.value);
						setQA(columnSearch(input, filterdata));
					}}
				/>
			</div>

			<div>
				{input ? (
					<>
						{qa.map((item) => {
							return <QAItem content={item} />;
						})}
					</>
				) : (
					<QAItemList />
				)}
			</div>
		</>
	);
}

export default SearchQA;
