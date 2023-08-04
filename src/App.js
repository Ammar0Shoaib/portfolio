
import './App.css';

import { Herobanner,Tabbar,Carda,Cardb,Cardc,Sgldiv } from './components';


function App() {
  return (
    <>
    <Herobanner/>
    <Tabbar/>

    <section className='card_container'>
    <div className='card_a'>
      <Carda/>
    </div>
    <div className='card_b'>
      <Cardb/>
    </div>
    <div className='card_c'>
      <Cardc/>
    </div>
    </section>
    <section className='aftercard'>
      <Sgldiv/>
    </section>

    
    </>
  );
}

export default App;
