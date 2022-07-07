import Home from './pages/Home';
import About from './pages/About';
import Degrees from './pages/Degrees';
import Expertise from './pages/Expertise';
import History from './pages/History';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Header from './components/header/Header';
import Nav from './components/navigation/Nav';
import './App.css';

function App() {
  return (

		<div className="is-preload">

			<div id="page-wrapper">

				<Header />
				<Nav />
				<Home />

				<section id="wrapper">

					<About />
					<Degrees />
					<Expertise />
					<History />
					<Services />

				</section>

				<Contact />

			</div>

		</div>

  );
}

export default App;
