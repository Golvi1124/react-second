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
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && <p>{fact}</p>}
            <button onClick={fetchFact} style={{ marginTop: "0.5rem" }}>
        Give me another!
      </button>
    </div>
  );
}
