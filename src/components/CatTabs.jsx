import { useState } from "react";

const catTabData = [
  { name: "RandomCatFact", label: "Random cat fact", color: "lightyellow" },
  { name: "FiveCatFacts", label: "Five cat facts", color: "lightyellow" },
  { name: "FiveCatBreeds", label: "Five cat breeds", color: "lightyellow" },
];

function CatTabs({ onTabChange }) {
  const [activeCatTab, setActiveCatTab] = useState();

  return (
    <div className="catTabs">
      {catTabData.map((tab) => (
        <button
          key={tab.name}
          onClick={() => {
            setActiveCatTab(tab.name);
            onTabChange(tab.name);
          }}
          className={activeCatTab === tab.name ? "active" : ""}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default CatTabs;
