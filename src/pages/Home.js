import React, { useState } from 'react';
import books from '../data/books';
import BookCard from '../components/BookCard';

function Home() {

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>Welcome to MagicBook online store</h1>

      <input
        type="text"
        placeholder="Search for a book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          margin: "20px 0",
          fontSize: "16px"
        }}
      />

      <div className="grid" style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
