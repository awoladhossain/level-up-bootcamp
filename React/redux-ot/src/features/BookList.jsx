import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./bookSlice";
// eslint-disable-next-line react/prop-types
const BookList = ({ onHandleEdit }) => {
  const { books } = useSelector((state) => state.booksR);
  console.log(books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log(id);
    // dispatch delete action here to remove book from the store state
    dispatch(deleteBook(id));
  };
  const handleEditBook = (book) => {
    console.log(book);
    onHandleEdit(book);
    // dispatch edit action here to update book in the store state
    // dispatch(editBook(id));
    // navigate to edit page with book id
  };
  return (
    <div>
      <h3>List of books</h3>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              {book.title} by{book.author} - ${book.price}-{book.quantity}
              <button onClick={() => handleEditBook(book)}>edit</button>
              <button onClick={() => handleDelete(book.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
