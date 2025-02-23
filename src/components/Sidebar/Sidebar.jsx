import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const navigate = useNavigate();

    return (

        <div className="sidebar-trigger">
            <div className="bars">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="sidebar">
                <ul>
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/About")}>About</li>
                    <li onClick={() => navigate("/profile")}>Profile</li>
                    <li onClick={() => navigate("/BooksList")}>Books</li>
                    <li onClick={() => navigate("/shelves")} className="shelves">
                        Shelves
                        <ul className="shelves-list">
                            <li>To Be Read</li>
                            <li>Reading</li>
                            <li>Read</li>
                            <li>Favorites</li>
                            <li>Add New Shelve</li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;
