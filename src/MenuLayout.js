import Menu from './components/Menu';
import { Outlet } from 'react-router-dom/dist';

const MenuLayout = () => {
	return (
		<>
			<Menu />
			<Outlet />
		</>
	);
};

export default MenuLayout;
