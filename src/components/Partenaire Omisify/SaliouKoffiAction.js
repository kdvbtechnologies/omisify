import SaliouHeader from "./SaliouHeader";
import SaliouNavigation from "./SaliouNavigation";
import Print from "../Print";

export default function SaliouKoffiAction() {
  return (
    <>
      <SaliouNavigation />
      <div>
        <Print />
        <SaliouHeader />
      </div>
    </>
  );
}
