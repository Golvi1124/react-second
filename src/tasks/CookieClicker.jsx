import { useState } from 'react';

export default function CookieClicker() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((c) => c + 1);
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Cookies: {count}</h2>
      <img
        src="https://png.pngtree.com/png-vector/20241022/ourlarge/pngtree-whimsical-cookie-clipart-for-invitations-and-more-png-image_14113699.png"
        alt="cookie"
        onClick={handleClick}
        style={{ cursor: 'pointer', width: '200px' }}
      />
      <div>
        <button onClick={() => setCount(0)} style={{ marginTop: '0.5rem' }}>
          Reset
        </button>
      </div>
    </div>
  );
}