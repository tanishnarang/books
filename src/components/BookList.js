import BookShow from "./BookShow";
export default function BookList({ books, ondelete, onEdit }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} ondelete={ondelete} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}
