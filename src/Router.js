import { Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home.js';
import About from './pages/about/About.js';
import Logement from './pages/logement/Logement.js';
import Error from './pages/error/Error.js';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/logement/:idproperty" element={<Logement/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
    );
}

export default Router;