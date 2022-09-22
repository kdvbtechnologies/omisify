import ContactAction from "../components/ContactAction";

export default function Contact() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <ContactAction />
    </div>
  );
}
