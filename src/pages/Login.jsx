import React, { useState } from 'react';
function Login(){
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");  

    function handleSubmit(e) {
        e.preventDefault();
       
    } 
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email" required
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password" required
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button type="submit">Login</button>    
            </div>
            
        </form>

    );
}

export default Login;