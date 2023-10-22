import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Addedit from './Addedit';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/adddata' element={<Addedit></Addedit>} />
      <Route path='/update/:id' element={<Addedit></Addedit>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
