import { NavLink } from "react-router-dom";
import Footer from "./Footer";
/*import { Helmet } from "react-helmet";
<Helmet>
        <body className="body-navbar"></body>
      </Helmet>

      
<footer>
  <p>Author: Hege Refsnes<br>
  <a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
      */

export default function HomeAction() {
  return (
    <>
      <div className="display-cards">
        <div className="cards">
          <div className="card">
            <div className="celebrity">
              <p>Populaire</p>
            </div>
            <h3>HTML / CSS</h3>
            <hr />
            <div className="card-desc">
              <p>Création de petit site internet avec HTML5</p>
              <div className="price">
                <p>A partir de</p>
                <h1>10€</h1>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <div className="mydesc">
                <li>Responsive Design</li>
                <li>Code Source</li>
                <li>paimenent après livraison</li>
                <p className="bonus">Bonus</p>
                <li>Création de logo</li>
                <li>Certificat SSL</li>
                <li>Hébergement</li>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <h3>JavaScript</h3>
            <hr />
            <div className="card-desc">
              <p>Création de gros site internet avec JS</p>
              <div className="price">
                <p>A partir de</p>
                <h1>25€</h1>
                <p>par fonctionnalité</p>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <p>
                Responsive Design + bonus: Creation de logo, Certificat SSL,
                Hebergement Creation de site internet au prix de 10 euros.
                Omisify est une entreprise qui crée des sites internet au prix
                de 10 euros. Le paimenent se fait après la livraison. Visitez
                leur site internet en cliquant ici https://www.omisify.com
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <h3>React JS</h3>
            <hr />
            <div className="card-desc">
              <p>Création de gros site internet avec REACT</p>
              <div className="price">
                <p>A partir de</p>
                <h1>35€</h1>
                <p>par fonctionnalité</p>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <p>
                Responsive Design + bonus: Creation de logo, Certificat SSL,
                Hebergement Creation de site internet au prix de 10 euros.
                Omisify est une entreprise qui crée des sites internet au prix
                de 10 euros. Le paimenent se fait après la livraison. Visitez
                leur site internet en cliquant ici https://www.omisify.com
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <h3>PHP</h3>
            <hr />
            <div className="card-desc">
              <p>Création de gros site internet avec PHP</p>
              <div className="price">
                <p>A partir de</p>
                <h1>40€</h1>
                <p>par fonctionnalité</p>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <p>
                Responsive Design + bonus: Creation de logo, Certificat SSL,
                Hebergement Creation de site internet au prix de 10 euros.
                Omisify est une entreprise qui crée des sites internet au prix
                de 10 euros. Le paimenent se fait après la livraison. Visitez
                leur site internet en cliquant ici https://www.omisify.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
