import SellerSignup from "./pages/SellerSignup" 
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';


function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sellerSignup" element={<SellerSignup />} /> 
    </Routes>

    </BrowserRouter>

    <Toaster/>

    </>
  );
}

export default App
