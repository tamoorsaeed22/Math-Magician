import { useState, useEffect } from 'react';

export default function DisplayQuote() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          method: 'GET',
          headers: { 'X-Api-Key': 'a4jkLzxa11Fyl351KUe2lQ==OqEqrHKzRyti4wax' },
          contentType: 'application/json',
        });
        const result = await response.json();
        setData(result[0]);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
        throw new Error(e);
      }
    }
    fetchQuote();
  }, []);

  if (loading) {
    return (
      <section className="quote_display">
        <p style={{ fontSize: '1.3rem' }}>Loading quote...</p>
      </section>
    );
  }

  if (error || data === undefined) {
    return (
      <section className="quote_display">
        <p style={{ fontSize: '1.3rem' }}>Encountered a problem while trying to get quote...</p>
      </section>
    );
  }

  return (
    <section className="quote_display">
      <q style={{ fontSize: '1.3rem' }}>
        {data.quote}
      </q>
      <p className="author">{data.author}</p>
    </section>
  );
}
