import StarOne from "./StarOne";
import StarsFive from "./StarsFive";
import StarsFour from "./StarsFour";
import StarsThree from "./StarsThree";
import StarsTwo from "./StarsTwo";

export default function StarsBook() {
  return (
    <>
      <div className="stars-book">
        <StarsFive />
        <StarsFour />
        <StarsThree />
        <StarsTwo />
        <StarOne />
      </div>
    </>
  );
}
