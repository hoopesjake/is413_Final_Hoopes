import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import EntertainersList from './pages/EntertainersList';
import EntertainerDetails from './pages/EntertainerDetails';
import NavBar from './components/NavBar';
import AddEntertainer from './pages/AddEntertainer';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/entertainers" element={<EntertainersList />} />
        <Route path="/entertainers/:id" element={<EntertainerDetails />} />
        <Route path="/entertainers/new" element={<AddEntertainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;