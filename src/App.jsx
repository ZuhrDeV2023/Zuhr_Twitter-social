import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Layout/Login"
import Register from './Layout/Register'
import Profile from "./Components/Profile"
import Bookmarks from "./Components/Bookmarks"
import Home from "./Components/Home"
import Explore from "./Components/Explore"
import Sidebar from "./Layout/Sidebar";
import Widgets from "./Layout/Widgets";
import Footer from "./Layout/Footer";
import Notifications from "./Components/Notifications";
// import List from	 "./Components/List"
// import Message from "./Components/Message"

function App() {
	return (
		<BrowserRouter>
			<div className="flex justify-between mx-auto">
					<Sidebar />
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/home" element={<Home />} />
						<Route path="/Notifications" element={<Notifications />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/bookmarks" element={<Bookmarks />} />
						<Route path="/explore" element={<Explore />} />
						{/* <Route path="/list" element={<List />} /> */}
						{/* <Route path="/list" element={<Message />} /> */}
					</Routes>
				<Widgets />
			</div>
	        <Footer />
		</BrowserRouter>
	);
}

export default App;