import '../Account/accountPage.css'
import Login from './Login.js'
import Registeration from './Registeration.js'

const accountPage = () =>{
    return(
       <div className="account-page-container">
        <div className="two-row-grid">
            <div className="two-column-grid-account">
                <h2>MY ACCOUNT</h2>
                <></>
            </div>
            <div className="two-column-grid-account">
                <Login/>
                <Registeration/>
                
            </div>
        </div>

       </div>
    )
}

export default accountPage