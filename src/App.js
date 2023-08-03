
import './App.css';

import { Herbanner,Tabbar,Carda } from './components';


function App() {
  return (
    <>
    <Herbanner/>
    <Tabbar/>

    <section className='card_container'>
    <div className='card_a'>
      <Carda/>
    </div>
    </section>

    
    </>
  );
}

export default App;
