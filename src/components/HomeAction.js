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
      <div className="introduce">
        <div className="introduce-title">
          <p>" Obtenez votre site internet complet pour seulement 10€ "</p>
        </div>
        <div className="introduce-mytitle">
          <p>Economisez de l'argent ! Gagnez du temps !</p>
          <p>
            Omisify se charge de la création de votre site internet et vous le
            livre le plus rapidement possible pour seulement 10€.
          </p>
          <p>Vous payerez après la livraison !</p>
        </div>
      </div>
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
                <p>À partir de</p>
                <h1>10€</h1>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <div className="mydesc">
                <li>Responsive Design</li>
                <li>Optimisation SEO</li>
                <li>Code Source</li>
                <li>Paimenent après la livraison</li>
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
                <p>À partir de</p>
                <h1>25€</h1>
                <p>par fonctionnalité</p>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <div className="mydesc">
                <li>Responsive Design</li>
                <li>Optimisation SEO</li>
                <li>Code Source</li>
                <li>Facturation par fonctionnalité</li>
                <li>Paimenent après la livraison</li>
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
            <h3>PHP</h3>
            <hr />
            <div className="card-desc">
              <p>Création de gros site internet avec PHP</p>
              <div className="price">
                <p>À partir de</p>
                <h1>35€</h1>
                <p>par fonctionnalité</p>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <div className="mydesc">
                <li>Responsive Design</li>
                <li>Optimisation SEO</li>
                <li>Code Source</li>
                <li>Facturation par fonctionnalité</li>
                <li>Paimenent après la livraison</li>
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
            <h3>React JS</h3>
            <hr />
            <div className="card-desc">
              <p>Création de gros site internet avec REACT</p>
              <div className="price">
                <p>À partir de</p>
                <h1>40€</h1>
                <p>par fonctionnalité</p>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <div className="mydesc">
                <li>Responsive Design</li>
                <li>Optimisation SEO</li>
                <li>Code Source</li>
                <li>Facturation par fonctionnalité</li>
                <li>Paimenent après la livraison</li>
                <p className="bonus">Bonus</p>
                <li>Création de logo</li>
                <li>Certificat SSL</li>
                <li>Hébergement</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
