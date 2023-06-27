
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/home/Home';
import Content from './Components/content/Content';
import Content2 from './Components/content2/Content2';
import Mainpage from './pages/mainpage/Mainpage';
import Loader from './Components/Loader/Loader';





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='content' element={<Content/>}/>
      <Route path='content2' element={<Content2/>}/>
      <Route path='mainpage' element={<Mainpage/>}/>
      <Route path='loader' element={<Loader/>}/>
     
    </Routes>
    </BrowserRouter>
    
  );

  
}


export default App;
