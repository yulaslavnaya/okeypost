import React from 'react';
import Banner from '../../components/Banner';
import SearchQA from './SearchQA';

function Help() {
	let header = 'Отвечаем на вопросы доставки';

	return (
		<>
			<Banner header={header} bannerType="page" />
			<SearchQA />
		</>
	);
}

export default Help;
