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

		{/* <!-- Page Wrapper --> */}
			<div id="page-wrapper">

				<Header />

				<Nav />

				{/* <!-- Banner --> */}
					<Home />

				{/* <!-- Wrapper --> */}
					<section id="wrapper">

						<About />

						{/* <!-- Two --> */}
						<Degrees />

						{/* <!-- Three --> */}
						<Expertise />

						{/* <!-- Four --> */}
						<History />

						<Services />

					</section>

				{/* <!-- Footer --> */}
					<Contact />

			</div>

		{/* <!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script> */}

	</div>

  );
}

export default App;
