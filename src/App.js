//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuLayout from './MenuLayout';
import Home from './pages/Home/Home';
import Sales from './pages/Sales';
import NotFound from './pages/NotFound';
import HowToBuy from './pages/HowToBuy/HowToBuy';
import Prices from './pages/Prices/Prices';
import Bonuses from './pages/Bonuses';
import Help from './pages/Help/Help';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<MenuLayout />}>
						<Route index element={<Home />} />
						<Route path="/sales" element={<Sales />} />
						<Route path="/howToBuy" element={<HowToBuy />} />
						<Route path="/prices" element={<Prices />} />
						<Route path="/help" element={<Help />} />
						<Route path="/bonuses" element={<Bonuses />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
				<Banner bannerType="socnet" />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
