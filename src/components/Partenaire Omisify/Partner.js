import NavbarBottomPartner from "../Home Omisify/NavbarBottomPartner";
import PartnerHeader from "./PartnerHeader";

export default function Partner() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <div>
        <PartnerHeader />
      </div>

      <NavbarBottomPartner />
    </div>
  );
}
