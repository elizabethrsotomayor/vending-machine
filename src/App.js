import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
            <Router>
                <Routes>
                  <Route path="/" element={<VendingMachine />} />
                  <Route path="/chips" element={<Chips />} />
                  <Route path="/soda" element={<Soda />} />
                  <Route path="/sardines" element={<Sardines />} />
                </Routes>
            </Router>
    </div>
  );
}

export default App;
