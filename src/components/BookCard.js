import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> {book.price}</p>
      <Link to={`/book/${book.id}`} className="details-btn">View Details</Link>
    </div>
  );
}

export default BookCard;
