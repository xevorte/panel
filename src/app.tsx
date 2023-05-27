import * as PAGES from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts';
import './styles/_global.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<PAGES.Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
