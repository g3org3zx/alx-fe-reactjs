import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
im>
  );
}

export default App;port Search from './components/Search';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
    </Router
