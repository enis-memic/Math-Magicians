import React, { useState, useEffect } from 'react';
import './Quotes.css';

const Quote = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.api-ninjas.com/v1/quotes?category=learning', {
      headers: { 'X-Api-Key': 'iKNK7Xbs47dymQExJ6KWaQ==1WtvRayZcMIMkK2x' },
    })
      .then((response) => response.json())
      .then((data) => {
        const body = `${data[0].quote} -  by ${data[0].author}`;
        setPost(body);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="quote-container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <p>{post}</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
