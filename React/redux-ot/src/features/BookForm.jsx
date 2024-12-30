/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "./bookSlice";

const BookForm = ({ bookTOEdit, onCancel }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });
  useEffect(() => {
    if (bookTOEdit) {
      setBook(bookTOEdit);
    }
  }, [bookTOEdit]);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...book, id: nanoid() });
    if (bookTOEdit) {
      dispatch(updateBook(book))
    } else {
      dispatch(addBook({ ...book, id: () => nanoid() }));
    }
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };
  const handleCancel = () => {
    onCancel();
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          placeholder="Author"
          value={book.author}
          name="author"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          value={book.price}
          name="price"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={book.quantity}
          name="quantity"
          onChange={handleChange}
        />

        <button type="submit">{bookTOEdit ? "update book" : "add book"}</button>
        {bookTOEdit && (
          <button type="submit" onClick={handleCancel}>
            cancel
          </button>
        )}
      </form>
    </>
  );
};

export default BookForm;
