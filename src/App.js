import './App.css';
import LeftMenu from './components/LeftMenu/LeftMenu';
import SearchNAv from './components/SearchNAv/SearchNAv';
import { Outlet } from 'react-router-dom';
import Menu from './components/UsersData/Menu';

function App() {
  return (
    <div className="App">
     <div className='d-flex'>
        <LeftMenu />
      <div>
          <SearchNAv/>
         <Outlet/>
        </div>
     </div>
    </div>
  );
}

export default App;
