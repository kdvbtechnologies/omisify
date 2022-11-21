import { NavLink } from "react-router-dom";

export default function PopupDownloadBtn() {
  return (
    <>
      <div className="popup-download-btn-background">
        <div className="card">
          <div className="border">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <div className="a">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28px"
                  cursor="pointer"
                  viewBox="0 0 24 24"
                >
                  <g fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g fill="#fff" fillRule="nonzero">
                      <path d="M17.404 4.722l2.717 10.142a2.75 2.75 0 01-1.944 3.368l-6.279 1.683A2.75 2.75 0 018.53 17.97L5.813 7.828A2.75 2.75 0 017.757 4.46l6.279-1.683a2.75 2.75 0 013.368 1.945zm-6.438 3.02a1 1 0 10-1.932.517 1 1 0 001.932-.518zm-5.163 3.916l1.761 6.57a3.733 3.733 0 001.003 1.714l-.443-.024a2.75 2.75 0 01-2.603-2.89l.282-5.37zm-.925-1.478l-.355 6.796c-.037.698.12 1.362.424 1.94l-.414-.161a2.75 2.75 0 01-1.582-3.553l1.927-5.022z"></path>
                    </g>
                  </g>
                </svg>
                <p style={{ marginTop: "-18px", color: "white" }}>
                  Guide d'installation
                </p>
              </div>
            </NavLink>

            <NavLink to="/" style={{ textDecoration: "none" }}>
              <div className="a">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  fill="white"
                  enableBackground="new 0 0 489.701 489.701"
                  version="1.1"
                  viewBox="0 0 489.701 489.701"
                  xmlSpace="preserve"
                >
                  <path d="M244.9 0c-9.5 0-17.1 7.7-17.1 17.2v312.3l-77.6-77.6c-6.7-6.7-17.6-6.7-24.3 0-6.7 6.7-6.7 17.6 0 24.3l106.9 106.9c3.2 3.2 7.6 5 12.1 5 4.6 0 8.9-1.8 12.1-5l106.9-107c6.7-6.7 6.7-17.6 0-24.3s-17.6-6.7-24.3 0L262 329.4V17.2c.1-9.5-7.6-17.2-17.1-17.2zM455.8 472.6c0-9.5-7.7-17.2-17.2-17.2H51.1c-9.5 0-17.2 7.7-17.2 17.2s7.7 17.1 17.2 17.1h387.6c9.501.1 17.1-7.6 17.1-17.1z"></path>
                </svg>
                <p style={{ color: "white" }}>
                  Télécharger l'application Vixinol Store
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
