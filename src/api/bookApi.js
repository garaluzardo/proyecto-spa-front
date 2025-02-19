import axios from "axios";
const API_URL = "http://localhost:5005/BooksData";

// Obtener todos los libros (Read)
export async function getBooks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error al obtener los libros");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Crear un nuevo libro (Create)
export async function createBook(bookData) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookData)
        });
        if (!response.ok) throw new Error("Error al crear el libro");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Actualizar un libro (Update)
export async function updateBook(bookId, updatedData) {
    try {
        const response = await fetch(`${API_URL}/${bookId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) throw new Error("Error al actualizar el libro");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Eliminar un libro (Delete)
export async function deleteBook(bookId) {
    try {
        const response = await fetch(`${API_URL}/${bookId}`, {
            method: "DELETE"
        });
        if (!response.ok) throw new Error("Error al eliminar el libro");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}