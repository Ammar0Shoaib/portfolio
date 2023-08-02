
import './App.css';

import { Herbanner,Tabbar,Carda } from './components';


function App() {
  return (
    <div className='App'>
    <Herbanner/>
    <Tabbar/>
    <div className='card_a'>
      <Carda/>
    </div>

    
    </div>
  );
}

export default App;
