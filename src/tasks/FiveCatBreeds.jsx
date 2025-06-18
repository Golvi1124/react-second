import { useEffect, useState } from "react";

export default function FiveCatBreeds() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://catfact.ninja/breeds?limit=5");
        if (!response.ok) {
          throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const result = await response.json();
        setBreeds(result.breeds);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <ol style={{ textAlign: "left", display: "inline-block" }}>
      {breeds.map((b) => (
        <li key={b.breed} style={{ marginBottom: "1rem" }}>
          <strong>{b.breed}</strong>
          <div>Comes from: {b.country}</div>
          <div>Origin: {b.origin}</div>
          <div>Coat: {b.coat}</div>
          <div>Pattern: {b.pattern}</div>
        </li>
      ))}
    </ol>
  );
}
