import React from 'react';
import books from '../data/books';
import BookCard from '../components/BookCard';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to MagicBook online store </h1>
      <div className="grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
