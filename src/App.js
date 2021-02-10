
import './App.css';
import {Body} from './components/Body/Body';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <div>
          <NavBar />
      </div>
      <div>
          <Body />
      </div>
    </div>
  );
}

export default App;
