import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Price: {book.price}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}

export default BookCard;
