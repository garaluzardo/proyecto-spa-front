import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './styles/App.css'

import Navbar from "./components/Navbar/Navbar.jsx";  
import Sidebar from "./components/Sidebar/Sidebar.jsx";
/* import Footer from "./components/Footer/Footer.jsx"; Aún no sé será un componente final en la App */

import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import BooksList from "./pages/BooksList/BooksList.jsx";
import About from "./pages/About/About.jsx";
import Shelves from "./pages/Shelves/Shelves.jsx";

function App() {
  // Manejo del saludo dinámico al usuario
  const [username, setUsername] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || { name: "Gara" };
    setUsername(user.name);
  }, []);

  return (
<Router>
<Navbar />
<Sidebar />
          <Routes>
            <Route path="/" element={<Home username={username}/>} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/BooksList" element={<BooksList />} />
            <Route path="/About" element={<About />} />
            <Route path="/Shelves" element={<Shelves />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
{/*           <Footer /> */}
    </Router>
  )
}

export default App
