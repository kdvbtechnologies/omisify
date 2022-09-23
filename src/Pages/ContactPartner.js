import ContactPartnerAction from "../components/ContactPartnerAction";

export default function ContactPartner() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <ContactPartnerAction />
    </div>
  );
}
