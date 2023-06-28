import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import {AuthContext} from "./context/AuthContext"
import { useContext } from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Navigate } from "react-router-dom";
import Search from "./components/Search/Search";


function App() {

  console.log("Server is running")
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <Router>
      <Routes>
          <Route path="/"
            element={user?<Home /> : <Register/>}
          />
          <Route path="/login"
            element={user?<Navigate to="/"/>:<Login/>}
          />
          <Route path="/register"
            element={user?<Navigate to="/"/>:<Register/>}
            />
      </Routes>
    </Router>
  );
}

export default App;
