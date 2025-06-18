import { useEffect, useState } from "react";

export default function FiveCatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFacts() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://catfact.ninja/facts?limit=5");
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        setFacts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFacts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <ul style={{ textAlign: "left", display: "inline-block" }}>
      {facts.map((f) => (
        <li key={f.fact}>{f.fact}</li>
      ))}
    </ul>
  );
}
