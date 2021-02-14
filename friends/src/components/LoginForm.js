import { useState, React }  from "react";

const LoginForm = () => {
    const [credentials, setCredentials] = useState({username: "", password: ""})
    const [isLoading, setIsLoading] = useState(true);
    
    const login = () => {

    }

    const handleChanges = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };
    
    return (
        <form>
            <label htmlFor="username">username:</label>
            <input type="text" id="username" name="username" type="text" value={credentials.username} onChange={handleChanges}/>
            <br></br><br></br>
            <label htmlFor="password">password: </label>
            <input type="text" id="password" name="password" type="password" value={credentials.password} onChange={handleChanges}/>
            <br></br><br></br>
             <button>Login</button>
            
        </form>
    )



}

export default LoginForm;