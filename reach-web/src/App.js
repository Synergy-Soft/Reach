import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import PrivateOutlet from "./components/PrivateOutlet";
import AccountPage from "./pages/Account";

function App() {
  
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />\
            <Route path="/account" element={<PrivateOutlet />}>
              <Route index element={<AccountPage />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
