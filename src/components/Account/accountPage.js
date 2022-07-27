import '../Account/accountPage.css'
import Login from './Login.js'
import Registeration from './Registeration.js'

const accountPage = () =>{
    return(
       <div className="account-page-container">
            <div className="two-column-grid-accoun container-top-page-account">
                <h3 className='title-account'>MY ACCOUNT</h3>
                <div></div>
            </div>
            <div className="two-column-grid-account">
                <Login/>
                <Registeration/>  
            </div>
       </div>
    )
}

export default accountPage