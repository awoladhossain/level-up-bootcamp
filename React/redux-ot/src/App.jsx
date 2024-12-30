import { useState } from "react";
import BookForm from "./features/BookForm";
import BookList from "./features/BookList";

const App = () => {
  const [bookTOEdit, setBookTOEdit] = useState(null);
  const handleEdit = (book) => {
    console.log(book);
    setBookTOEdit(book);
  };
  const handleCancelEdit = (book) => {
    console.log(book);
    setBookTOEdit(null);
  };
  return (
    <div className="App">
      <BookForm bookTOEdit={bookTOEdit} onCancel={handleCancelEdit} />
      <BookList onHandleEdit={handleEdit} />
    </div>
  );
};

export default App;
