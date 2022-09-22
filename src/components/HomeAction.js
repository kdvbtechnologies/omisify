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
      <h1>Bienvenue</h1>
      <p>
        Responsive Design + bonus: Creation de logo, Certificat SSL, Hebergement
        Creation de site internet au prix de 10 euros. Omisify est une
        entreprise qui crée des sites internet au prix de 10 euros. Le paimenent
        se fait après la livraison. Visitez leur site internet en cliquant ici
        https://www.omisify.com
      </p>
      <Footer />
    </>
  );
}
