import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { Account } from "./pages/Account";
import { Detailmovie } from "./pages/Detailmovie";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";



function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="signup" element={<Signup/>}/>
          <Route path="account" element={<ProtectedRoute><Account/></ProtectedRoute>}/>
          <Route path="/detail-movie/:id" element={<Detailmovie/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
