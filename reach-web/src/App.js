import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<AuthProvider>
				<Router>
          <Navbar/>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<LoginPage />} />
						{/* <Route path="/account" element={<PrivateRoute />}>
							<Route index element={<AccountPage />} />
						</Route> */}
					</Routes>
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
