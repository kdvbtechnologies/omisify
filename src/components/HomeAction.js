import { Helmet } from "react-helmet";

export default function HomeAction() {
  return (
    <>
      <Helmet>
        <body className="body-navbar"></body>
      </Helmet>
      <h1>Bienvenue</h1>
      <footer>
        <p>© 2022 Omisify</p>
      </footer>
    </>
  );
}
