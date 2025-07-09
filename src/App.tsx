import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedPage from './components/HomePage';
import TrendPage from './components/TrendingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/trends" element={<TrendPage />} />
      </Routes>
    </Router>
  );
}

export default App;
