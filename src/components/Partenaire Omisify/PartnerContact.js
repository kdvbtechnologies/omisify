import { useNavigate } from "react-router-dom";

export default function PartnerContact() {
  const navigate = useNavigate();
  return (
    <>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="contact">
        <div className="contact-title">
          <h3>Service Partenaire</h3>
          <p>E-mail : contact@omisify.com</p>
          <p>Whatsapp : +5514991550021</p>
          <p>Telegram : +5514991550021</p>
        </div>
      </div>
      <p
        align="center"
        style={{
          fontSize: "16px",
          fontFamily: "Roboto, Arial, sans-serif",
          paddingTop: "20px",
          color: "blue",
        }}
      >
        Le Service Partenaire est ouvert 24h/24
      </p>
    </>
  );
}
