import { useState } from "react";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";
import Back from "../Back/Back";

export default function Update() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function Download() {
    setIsLoading(true);
    window.location = "/update-success";
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div onClick={() => navigate(-1)}>
        <Back />
      </div>

      <div className="update">
        <div className="title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="30px"
            enableBackground="new 0 0 512 512"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g fill="red">
              <path d="M256 0L114.759 194.207 211.862 194.207 211.862 300.138 300.138 300.138 300.138 194.207 397.241 194.207z"></path>
              <path d="M282.483 335.448h-52.966c-9.71 0-17.655 7.945-17.655 17.655s7.945 17.655 17.655 17.655h52.966c9.71 0 17.655-7.945 17.655-17.655s-7.945-17.655-17.655-17.655M282.483 406.069h-52.966c-9.71 0-17.655 7.945-17.655 17.655s7.945 17.655 17.655 17.655h52.966c9.71 0 17.655-7.945 17.655-17.655s-7.945-17.655-17.655-17.655M282.483 476.69h-52.966c-9.71 0-17.655 7.945-17.655 17.655S219.807 512 229.517 512h52.966c9.71 0 17.655-7.945 17.655-17.655 0-9.711-7.945-17.655-17.655-17.655"></path>
            </g>
          </svg>
          <p>Mise à jour</p>
        </div>
        {/* title */}

        <div className="a">
          <p>Cliquer sur Télécharger pour obtenir la dernière mise à jour</p>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button onClick={Download}>Télécharger</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
