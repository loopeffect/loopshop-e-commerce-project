import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';



function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header></Header>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
