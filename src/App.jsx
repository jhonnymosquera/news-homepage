import './App.css';
import NavBar from './components/navigation/NavBar';
import Footer from './components/layout/Footer';
import Router from './components/router/Router';

function App() {
	return (
		<div className="App container">
			<NavBar />
			<Router />
			<Footer />
		</div>
	);
}

export default App;
