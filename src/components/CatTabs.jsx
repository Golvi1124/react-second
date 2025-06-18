import { useState } from "react";

const catTabData = [
  { name: "RandomCatFact", color: "lightyellow" },
  { name: "FiveCatFacts", color: "lightyellow" },
  { name: "FiveCatBreeds", color: "lightyellow" },
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
          {tab.name}
        </button>
      ))}
    </div>
  );
}

export default CatTabs;
