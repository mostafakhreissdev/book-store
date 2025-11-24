import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/books';

function BookDetails() {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <h1 className="container">{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> {book.price}</p>
      <p className="container">{book.description}</p>
    </div>
  );
}

export default BookDetails;
