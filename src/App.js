import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './views/home/Home';
import { About } from './views/about/About';
import { Contact } from './views/contact/Contact';
import { Admin } from './views/admin/Admin';
import { Creator } from './views/creator/Creator';
import { Preview } from './views/preview/Preview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<About />} />
        <Route path='/contato' element={<Contact />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/creator' element={<Creator />} />
        <Route path='/preview' element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;
