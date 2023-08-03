
import './App.css';

import { Herbanner,Tabbar,Carda,Cardb,Cardc } from './components';


function App() {
  return (
    <>
    <Herbanner/>
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

    
    </>
  );
}

export default App;
