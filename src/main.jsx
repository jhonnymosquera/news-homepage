import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ContexProvider from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ContexProvider>
		<React.StrictMode>
			<HashRouter>
				<App />
			</HashRouter>
		</React.StrictMode>
	</ContexProvider>
);
