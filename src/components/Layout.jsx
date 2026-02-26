import {Router, Router} from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "./Sidebar";

import OOP from "../pages/OOP";
import HowTo from "../pages/HowTo";
import Api from "../pages/Api";
import Signin from "../pages/SignIn";
import Signup from "../pages/Signup";

function Layout() {
    return (
        <div className="App">
            <Navbar />
            <div ClassName= "main">
                <Sidebar />
                <Router>
                    <Route path="/oop" element={<OOP />} />
                    <Route path="/howto" element={<HowTo />} />
                    <Route path="/api" element={<Api />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                </Router>
            </div>
        </div>
                
    );
}

export default Layout;