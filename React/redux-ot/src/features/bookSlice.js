import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "x", author: "John", price: 12, quantity: 20 },
    { id: 2, title: "y", author: "Johb", price: 12, quantity: 220 },
    { id: 3, title: "r", author: "emla", price: 85, quantity: 96 },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      console.log("slice id", id);
      state.books = state.books.filter((book) => book.id !== id);
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author, price, quantity } = action.payload;
      const index = state.books.find((book) => book.id === id);
      if (index) {
        index.title = title;
        index.author = author;
        index.price = price;
        index.quantity = quantity;
      }
    },
  },
});
export const { deleteBook, addBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
