import './Login.css';

function Login() {
    return (
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <form>
                <label htmlFor="Email">Email: </label>
                <input type="text" id="Email" name="Email" />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" />
                <button type="submit">OK</button>
            </form>
        </div>
    );
}

export default Login;