import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ProjectPage from './pages/Project/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projetos" element={<ProjectPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
