import Header from './components/Header/header.js';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import AccountPage from './components/Account/accountPage.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/account' element={<AccountPage/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
