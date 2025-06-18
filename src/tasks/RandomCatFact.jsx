import { useEffect, useState } from "react";

export default function RandomCatFact() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFact();
  }, []);

  async function fetchFact() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("https://catfact.ninja/fact");
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const data = await res.json();
      setFact(data.fact);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={fetchFact} style={{ marginBottom: "0.5rem" }}>
        New fact
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && <p>{fact}</p>}
    </div>
  );
}
