import PartnerHeader from "./PartnerHeader";
import PartnerNav from "./PartnerNav";

export default function Partner() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <PartnerNav />
      <div>
        <PartnerHeader />
      </div>
    </div>
  );
}
