import { useState } from "react";
export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Enter the title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">create !</button>
      </form>
    </div>
  );
}
