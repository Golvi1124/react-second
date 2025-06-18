import RandomCatFact from "../tasks/RandomCatFact";
import FiveCatFacts from "../tasks/FiveCatFacts";
import FiveCatBreeds from "../tasks/FiveCatBreeds";

function CatTabContent({ tab }) {
  switch (tab) {
    case "RandomCatFact":
      return <RandomCatFact />;
    case "FiveCatFacts":
      return <FiveCatFacts />;
    case "FiveCatBreeds":
      return <FiveCatBreeds />;
    default:
      return null; // don't render anything if no tab matches
  }
}
export default CatTabContent;
