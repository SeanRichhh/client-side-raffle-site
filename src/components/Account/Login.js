
const Login = () => {
    return (
        <section>
            <div>
                <h3>Login</h3>
            </div>
            <form>
                <label> Email Address:
                    <input
                    type='text'
                    value=''
                    />
                </label>
                <label> Password : 
                    <input
                    type='text'
                    value=''
                    />
                </label>
                <button>Login</button>
                <p>Lost your password?</p>
            </form>
        </section>
        
    )
}

export default Login