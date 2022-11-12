import HRinWikiDesc from "./HRinWikiDesc";
import OthersLinksinWikiDesc from "./OthersLinksinWikiDesc";

export default function WikiDesc() {
  const website = "https://cristianoronaldo.com";

  return (
    <>
      <div className="wiki-desc">
        <p>
          Cristiano Ronaldo dos Santos Aveiro, couramment appelé Cristiano
          Ronaldo ou Ronaldo et surnommé CR7, né le 5 février 1985 à Funchal,
          est un footballeur international portugais qui évolue au poste
          d'attaquant à Manchester United.
        </p>

        <div className="a">
          <p
            style={{
              fontWeight: "bold",
              paddingRight: "3px",
            }}
          >
            Date et lieu de naissance :
          </p>
          <p>5 février 1985 à Hospital Dr. Nélio Mendonça, Funchal, Portugal</p>
        </div>

        <div className="a">
          <p
            style={{
              fontWeight: "bold",
              paddingRight: "3px",
            }}
          >
            Équipe actuelle :
          </p>{" "}
          <p>Manchester United</p>
        </div>

        <div className="a">
          <p
            style={{
              fontWeight: "bold",
              paddingRight: "3px",
            }}
          >
            Partenaire :
          </p>
          <p>Georgina Rodriguez (2016 – jusqu'à présent)</p>
        </div>

        <div className="plain-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3.512 15h4.66A25.567 25.567 0 018 12c0-1.044.06-2.052.172-3h-4.66A8.985 8.985 0 003 12c0 1.052.18 2.062.512 3zm.424 1a9.017 9.017 0 006.092 4.783c-.78-1.06-1.376-2.746-1.714-4.783H3.936zm16.552-1A8.985 8.985 0 0021 12c0-1.052-.18-2.062-.512-3h-4.66c.113.948.172 1.956.172 3s-.06 2.052-.172 3h4.66zm-.424 1h-4.378c-.338 2.037-.935 3.723-1.714 4.783A9.017 9.017 0 0020.064 16zm-10.88-1h5.632c.118-.938.184-1.947.184-3s-.066-2.062-.184-3H9.184A24.046 24.046 0 009 12c0 1.053.066 2.062.184 3zm.151 1c.522 2.968 1.583 5 2.665 5s2.143-2.032 2.665-5h-5.33zm-5.4-8h4.379c.338-2.037.935-3.723 1.714-4.783A9.017 9.017 0 003.936 8zm16.13 0a9.017 9.017 0 00-6.093-4.783c.78 1.06 1.376 2.746 1.714 4.783h4.378zM9.334 8h5.33C14.143 5.032 13.082 3 12 3S9.857 5.032 9.335 8zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
          </svg>

          <a href={website} target="_blank" rel="noreferrer">
            <button>Site officiel</button>
          </a>
        </div>

        <HRinWikiDesc />
        <OthersLinksinWikiDesc />
        <HRinWikiDesc />
      </div>
    </>
  );
}
