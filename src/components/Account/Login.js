const Login = () => {
    return (
        <section className="form-container">
            <div>
                <h3>Login</h3>
            </div>
            <form>
                <div className="login-form-grid">
                <label>Enter Email Address</label>
                <input
                   className="input-text"
                    type='text'
                    placeholder='Email'
                    />
                </div>
                <div className="login-form-grid">
                <label>Enter Password</label>
                <input
                    className="input-text"
                    type='text'
                    placeholder='Password'
                    />
                </div>
                <button>Login</button>
                <p>Lost your password?</p>
            </form>
        </section>
        
    )
}

export default Login