import Back from "../Back/Back";

export default function DetailsPopularityAuthor() {
  return (
    <>
      <div style={{ background: "#eee", position: "fixed", width: "100%" }}>
        <Back />
      </div>
      <div className="align-details-popularity-author">
        <div className="details-popularity-author">
          <svg
            width="20px"
            cursor="pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M501 11H11v390.9h155.7l-53 87.7 17.8 10.9 59.6-98.6h54.5v66.2h20.9v-66.2h54l59.9 99.1 17.8-10.9-53.3-88.2H501V11zm-19.8 370.9H31.9V32h449.3v349.9z"></path>
            <path d="M175.7 191.7H86.1v141.8h89.7V191.7zm-20.8 120.9h-48V211.7h48v100.9zM300.8 94h-89.7v239.6h89.7V94zM280 312.6h-48V115h48v197.6zM425.9 147.6h-89.7v186h89.7v-186zm-20.8 165h-48v-144h48v144z"></path>
          </svg>
          <p>Détails sur la popularité de Ousmane Dembélé</p>
        </div>
      </div>

      <div className="align-popularity-paragraph">
        <div className="popularity-paragraph">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            cursor="pointer"
            fill="#00cc00"
            stroke="#00cc00"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            ariaLabelledby="trendingUpIconTitle"
            color="#00cc00"
            viewBox="0 0 24 24"
          >
            <path d="M3 17L9 11 13 15 20.405 7.595"></path>
            <path d="M20.405 7.595L21 7"></path>
            <path d="M21 10L21 7 18 7"></path>
          </svg>
          <p>Ousmane Dembelé est populaire majoritairement en France.</p>
        </div>
      </div>

      <div className="popularity-by-country">
        <div className="hr">
          <hr />
        </div>

        <div className="a">
          <p>France</p>
          <p>-</p>
          <p>75%</p>
        </div>
        <div className="hr">
          <hr />
        </div>

        <div className="a">
          <p>Guinee Equatoriale</p>
          <p>-</p>
          <p>15%</p>
        </div>
        <div className="hr">
          <hr />
        </div>

        <div className="a">
          <p>Cameroun</p>
          <p>-</p>
          <p>10%</p>
        </div>
        <div className="hr">
          <hr />
        </div>
      </div>

      <div className="popularity-author-last-maj">
        <p>Dernière mise à jour de cette page : 11/12/2023</p>
      </div>
    </>
  );
}
