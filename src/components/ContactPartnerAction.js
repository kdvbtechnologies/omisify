import { NavLink } from "react-router-dom";

export default function ContactPartnerAction() {
  return (
    <>
      <div className="back-btn">
        <NavLink to="/signup">
          <button>Retour</button>
        </NavLink>
      </div>
      <div className="contact">
        <div className="contact-title">
          <h3>Service Partenaire</h3>
          <p>E-mail : contact@omisify.com</p>
          <p>Whatsapp : +5514991550021</p>
          <p>Telegram : +5514991550021</p>
        </div>
      </div>
    </>
  );
}
