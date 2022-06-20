import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./compnents/pages/Layout";
import Home from "./compnents/pages/Home";
import LoginReg from "./compnents/pages/auth/LoginReg";
import UserDashboard from "./compnents/pages/auth/UserDashboard";
import AdminReg from "./compnents/pages/auth/AdminReg";
import AdminDashboard from "./compnents/pages/auth/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="admin" element={<AdminReg />} />
            <Route path="login" element={<LoginReg />} />
          </Route>
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
