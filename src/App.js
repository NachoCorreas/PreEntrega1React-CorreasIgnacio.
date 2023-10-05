
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './componentes/Navbar/Nav';
import SectionPrinc from './componentes/SectionPrinc/SectionPrinc';
import Zapas from './componentes/ZapasSection/Zapas';
import ZapasN from './componentes/ZapasSection/ZapasN';
import ZapasC from './componentes/ZapasSection/ZapasC';



function App() {


  return (
    <BrowserRouter >
    <div className='appBody'>
    <Nav/>
    <Routes>
      <Route exact path='/' element= {<SectionPrinc/>}/>
      <Route exact path='/adidas' element= {<Zapas/>}/>
      <Route exact path='/nike' element= {<ZapasN/>}/>
      <Route exact path='/converse' element= {<ZapasC/>}/>
    </Routes>
  
    </div>
 
    </BrowserRouter>
    )
   
}

export default App;
