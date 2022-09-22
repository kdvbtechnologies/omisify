import { Helmet } from "react-helmet";

export default function HomeAction() {
  return (
    <>
      <Helmet>
        <body className="body-navbar"></body>
      </Helmet>
      <h1>Bienvenue</h1>
      <p>
        N.B : Les paiements à la livraison sont uniquement réservés aux nouveaux
        sites.
      </p>
      <footer>
        <p>© 2022 Omisify</p>
      </footer>
    </>
  );
}
