import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Layout from './components/layout/Layout';

function App() {
	const location = useLocation();

	return (
		<Layout>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile/:nickname" element={<Profile />} />
				</Routes>
			</AnimatePresence>
		</Layout>
	);
}

export default App;