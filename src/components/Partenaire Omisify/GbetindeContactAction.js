import GbetindeNav from "./GbetindeNav";

export default function GbetindeContactAction() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <GbetindeNav />
      <div className="contact">
        <div className="contact-title">
          <h1>Contactez-Nous</h1>
          <p>E-mail : contact@omisify.com</p>
          <p>Whatsapp : +5514991550021</p>
        </div>
      </div>
    </div>
  );
}
