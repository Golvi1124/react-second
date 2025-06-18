import { useState, useEffect } from "react";

export default function FiveCatBreeds() {
    const [breeds, setBreeds] = useState(null);
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
                setBreeds(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBreeds();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Five Cat Breeds</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {breeds && (
                <ul>
                    {breeds.map((breed) => (
                        <li key={breed.id}>
                            <strong>{breed.name}</strong>: {breed.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

