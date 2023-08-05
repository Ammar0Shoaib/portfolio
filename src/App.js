
import './App.css';

import { Herobanner,Tabbar,Carda,Cardb,Cardc,Sgldiv,Repart1,Repart2,Repart3,Myservices } from './components';


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
    <section className='resume'>
      <div className="resumepart1"><Repart1/></div>
      <div className="resumepart2"><Repart2/></div>
      <div className="resumepart3"><Repart3/></div>
    </section>
    <section className='myservices'>
    <Myservices/>
    </section>


    
    </>
  );
}

export default App;
