import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Lt } from './pages/Lt';
import { UniPostor } from './pages/UniPostor';
import { Poe } from './pages/Poe';

export function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="lt" element={<Lt />} />
				<Route path="create/unipostor" element={<UniPostor />} />
				<Route path="create/poe_plus_plus_plus_plus_plus" element={<Poe />} />
				<Route path="*" element={<Home />} />
			</Route>
		</Routes>
	);
}
