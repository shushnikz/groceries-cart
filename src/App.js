import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
