import Header from "../Header/header.js"

const accountPage = () =>{
    return(
       <div className="account-page-container">
        <Header/>
        <div className="two-row-grid">
            <div className="two-column-grid-account">
                <h2>MY ACCOUNT</h2>
            </div>
            <div className="two-column-grid-account">
                <Login/>
                <Register/>
            </div>
        </div>

       </div>
    )
}

export default accountPage