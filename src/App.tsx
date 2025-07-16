import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedPage from './components/HomePage';
import TrendPage from './components/TrendingPage';
import NewsAlertPage from './components/NotificationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/trends" element={<TrendPage />} />
        <Route path="/news-alerts" element={<NewsAlertPage />} />
      </Routes>
    </Router>
  );
}

export default App;
