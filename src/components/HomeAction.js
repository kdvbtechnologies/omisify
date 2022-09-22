import { Helmet } from "react-helmet";

export default function HomeAction() {
  return (
    <>
      <Helmet>
        <body className="body-navbar"></body>
      </Helmet>
      <h1>Bienvenue</h1>
    </>
  );
}
