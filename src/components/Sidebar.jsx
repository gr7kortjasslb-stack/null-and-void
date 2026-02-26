import {link} from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <link to="/oop">OOP</link>
            <link to="/howto">How To</link>
            <link to="/api">API</link>
        </div>
    );
}
export default Sidebar;