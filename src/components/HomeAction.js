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
      <div className="cards">
        <div className="card">
          <h3>HTML / CSS</h3>
          <hr />

          <div className="card-desc">
            <p>Creation de petit site internet</p>
            <p>A partir de 10€</p>
            <button>Souscrire</button>
            <p>
              Responsive Design + bonus: Creation de logo, Certificat SSL,
              Hebergement Creation de site internet au prix de 10 euros. Omisify
              est une entreprise qui crée des sites internet au prix de 10
              euros. Le paimenent se fait après la livraison. Visitez leur site
              internet en cliquant ici https://www.omisify.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
