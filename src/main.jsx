
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './components/theme-provider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<App />
		</ThemeProvider>

);
