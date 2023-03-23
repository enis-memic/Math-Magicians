const { useState, useEffect } = require('react');

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://api.api-ninjas.com/v1/quotes?category=education', {
      headers: { 'X-Api-Key': 'iKNK7Xbs47dymQExJ6KWaQ==1WtvRayZcMIMkK2x' },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="quote-container">
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <p>
            &ldquo;
            {quote}
            &ldquo;
          </p>
          <p>{author}</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
