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
import BookDetail from "./pages/BookDetail/BookDetail.jsx";
import About from "./pages/About/About.jsx";
import Shelves from "./pages/Shelves/Shelves.jsx";
import Stats from "./pages/Stats/Stats.jsx";

import { getBooks, createBook, updateBook, deleteBook } from "./api/bookApi.js"; // Importo las funciones para manejar los datos desde App


function App() {
  // Estados
  const [username, setUsername] = useState("");
  const [books, setBooks] = useState([]); // Para manejo de libros

  // Saludo al usuario
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || { name: "Gara" };
    setUsername(user.name);
  }, []);

  // Obtener libros
  const fetchBooks = async () => {
    const booksData = await getBooks();
    if (booksData) {
      setBooks(booksData);
    }
  };

  // Crear libros
  const handleCreateBook = async (bookData) => {
    const newBook = await createBook(bookData);
    if (newBook) {
      setBooks((prevBooks) => [...prevBooks, newBook]);
    }
  };

  // Actualizar libros
  const handleUpdateBook = async (bookId, updatedData) => {
    const updatedBook = await updateBook(bookId, updatedData);
    if (updatedBook) {
      setBooks((prevBooks) =>
        prevBooks.map((book) => (book.id === bookId ? updatedBook : book))
      );
    }
  };

  // Eliminar libros
  const handleDeleteBook = async (bookId) => {
    const success = await deleteBook(bookId);
    if (success) {
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
    }
  };

  useEffect(() => {
    fetchBooks(); // Obtener los libros cuando la app cargue
  }, []);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home username={username} />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/BooksList" element={<BooksList books={books} onCreateBook={handleCreateBook} onDeleteBook={handleDeleteBook} />} />
        <Route path="/books/:id" element={<BookDetail onUpdateBook={handleUpdateBook} books={books} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shelves" element={<Shelves />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/*<Footer />*/}
    </Router>
  )
}

export default App
