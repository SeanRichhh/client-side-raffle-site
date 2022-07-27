
const accountPage = () =>{
    return(
       <div className="account-page-container">
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