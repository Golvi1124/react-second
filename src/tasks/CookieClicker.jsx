import { useState } from "react";

export default function CookieClicker() {
  // The initial state is passed as an argument to useState.
  const [count, setCount] = useState(0);
  // function that updates
  const handleClick = () => setCount((prev) => prev + 1);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Cookies: {count}</h2>
      <p>Click on the cookie to increase the count!</p>
      <img
        src="https://png.pngtree.com/png-vector/20241022/ourlarge/pngtree-whimsical-cookie-clipart-for-invitations-and-more-png-image_14113699.png"
        alt="cookie"
        onClick={handleClick}
        style={{ cursor: "pointer", width: "200px" }}
      />

      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? "Hide Option" : "Want to erase progress?"}
        </button>

        {isVisible && (
          <>
            <p>Click on button below and start new!</p>
            <button onClick={() => setCount(0)} style={{ marginTop: "0.5rem" }}>
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
}
