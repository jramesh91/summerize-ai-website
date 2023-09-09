import './App.css';

//Components
import { ComplexNavbar } from './components/Navbar';

//Pages
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <ComplexNavbar />
      <LandingPage/>
    </div>
  );
}

export default App;
