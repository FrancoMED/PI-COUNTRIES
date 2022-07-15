import './App.css';
import { Route } from 'react-router-dom';
import Cards from './components/Home/Cards.jsx';
import Landing from './components/Landing/Landing.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import CreateActivity from './components/CreateActivity/CreateActivity.jsx';
import Details from './components/Details/Details.jsx';
function App() {
	return (
		<div className="App">
			<Route path="/" exact component={Landing} />
			<Route path="/countries" component={NavBar} />
			<Route path="/countries" component={Cards} />
			<Route path="/details/:id" component={Details} />
			<Route path="/activities" component={CreateActivity} />

			{/* <h1>Henry Countries</h1>
			<Cards /> */}
		</div>
	);
}

export default App;
