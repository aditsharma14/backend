const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

const registerUser = async (username, password) => {
  if (!username || !password) {
    throw { status: 400, message: "Username and password required" };
  }

  if (users.some(u => u.username === username)) {
    throw { status: 400, message: "User already exists" };
  }

  users.push({ username, password });
  return { message: "User registered successfully" };
};

const getAllBooks = async () => {
  return books;
};

const getBookByISBN = async (isbn) => {
  return books[isbn] || null;
};

const getBooksByAuthor = async (author) => {
  let filtered_books = {};
  for (let isbn in books) {
    if (books[isbn].author === author) {
      filtered_books[isbn] = books[isbn];
    }
  }
  return filtered_books;
};

const getBooksByTitle = async (title) => {
  let filtered_books = {};
  for (let isbn in books) {
    if (books[isbn].title === title) {
      filtered_books[isbn] = books[isbn];
    }
  }
  return filtered_books;
};

const getReviewsByISBN = async (isbn) => {
  if (!books[isbn]) {
    throw { status: 404, message: "Book not found" };
  }
  return books[isbn].reviews;
};

public_users.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await registerUser(username, password);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message || "Internal server error" });
  }
});

// Get the book list available in the shop
public_users.get('/', async (req, res) => {
  const allBooks = await getAllBooks();
  return res.send(JSON.stringify(allBooks, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', async (req, res) => {
  const isbn = req.params.isbn;
  const book = await getBookByISBN(isbn);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.send(book);
});

// Get book details based on author
public_users.get('/author/:author', async (req, res) => {
  const author = req.params.author;
  const filtered_books = await getBooksByAuthor(author);
  return res.send(JSON.stringify(filtered_books, null, 4));
});

// Get all books based on title
public_users.get('/title/:title', async (req, res) => {
  const title = req.params.title;
  const filtered_books = await getBooksByTitle(title);
  return res.send(JSON.stringify(filtered_books, null, 4));
});

// Get book review
public_users.get('/review/:isbn', async (req, res) => {
  try {
    const isbn = req.params.isbn;
    const reviews = await getReviewsByISBN(isbn);
    return res.send(JSON.stringify(reviews, null, 4));
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message || "Internal server error" });
  }
});

module.exports.general = public_users;
