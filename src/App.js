import Header from './components/Header/header.js';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import AccountPage from './components/Account/accountPage.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/account' element={<AccountPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
