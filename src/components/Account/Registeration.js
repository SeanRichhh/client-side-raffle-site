
const Registeration = () => {
    return(
       <section className="form-container">
             <div>
                <h3>Register</h3>
            </div>
            <form>
            <div className="login-form-grid">
                <label>First Name</label>
                <input
                   className="input-text"
                    type='text'
                    placeholder='Email'
                    />
                </div>
            <div className="login-form-grid">
                <label>Surname</label>
                <input
                   className="input-text"
                    type='text'
                    placeholder='Surname'
                    />
                </div>
            <div className="login-form-grid">
                
                <label>Email Address</label>
                <input
                   className="input-text"
                    type='text'
                    placeholder='Email'
                    />
                </div>
                <div className="login-form-grid">
                <label>Password</label>
                <input
                    className="input-text"
                    type='text'
                    placeholder='Password'
                    />
                </div>
                <button>Register</button>
            </form>
       </section>
    )
}
export default Registeration