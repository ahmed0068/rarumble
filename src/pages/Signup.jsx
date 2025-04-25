import { useState } from "react"
import "../public/Signup.css"
import { Link } from "react-router-dom"
import { toast } from 'react-hot-toast';


function Signup() {
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [Email, setEmail] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  

  function handleSubmit(e) {
    e.preventDefault()
   if (Password !== ConfirmPassword) {
        toast.error("Passwords do not match")
        return
        }

   }
   

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username" required
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email" required
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password" required
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password" required
          value={ConfirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="show-password">
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <label htmlFor="showPassword">Show password</label>
      </div>

      <button type="submit">Signup</button>
      <p>
        Already have an account? <Link to="/login">Login</Link> 
      </p>
    </form>
  )
}

export default Signup
