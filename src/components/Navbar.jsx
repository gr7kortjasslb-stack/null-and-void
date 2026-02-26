import {link} from "react-router-dom";
function Navbar() {
    return (
            <div className="navbar">
                <h2>Object-Oriented Programming</h2>
                <div>
                    <link to="/SignIn">Sign In</link>
                    <link to="/SignUp">Sign Up</link>
                </div>
            </div>
    );
}
export default Navbar;