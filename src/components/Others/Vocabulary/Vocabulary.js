import { useNavigate } from "react-router-dom";

export default function Vocabulary() {
  const navigate = useNavigate();

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="vocabulary">
        <div className="align">
          <div className="title">
            <p>Vocabulaire</p>
          </div>
        </div>
        <div className="go-down">
          <div className="header">
            <p>
              Lisez ce vocabulaire pour avoir plus d'informations sur les
              abbréviations et les expressions utilisées par les Partenaires
              Omisify.
            </p>
          </div>
          <div className="a">
            <div className="b">
              <p>Bonus B</p>
            </div>
            <p>
              Le Bonus de Bienvenue abrégé en Bonus B est offert une seule fois
              à chaque nouveau arivant après avoir entrer le Code de Bienvenue
              de son Mentor
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Bonus CB</p>
            </div>
            <p>
              Le Bonus du Code de Bienvenue abrégé en Bonus CB est attribué au
              Mentor lorsque son élève s'inscrit avec son Code de Bienvenue.
              L'élève bénéficie d'un Bonus de Bienvenue de 100 points et le
              Mentor bénéficie d'un Bonus du Code de Bienvenue de 10 points
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Bonus JG</p>
            </div>
            <p>
              Le Bonus des Journées de générosité abrégé en Bonus JG. Les points
              que le Partenaire gagnent pendant les journées de générosité sont
              multipliés par 10
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Bonus EP</p>
            </div>
            <p>
              Le Bonus d'Excellent(e) Partenaire abrégé en Bonus EP est offert
              chaque jour à chaque partenaire après avoir terminé sa journée de
              travail
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Code B</p>
            </div>
            <p>
              Le Code de Bienvenue abrégé en Code B s'agit du Code de Bienvenue
              du Partenaire Omisify à ne pas confondre avec le Code de Bienvenue
              du Mentor
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Likes C</p>
            </div>
            <p>
              L'option Likes (commentaire) abrégé en Likes C concerne les likes
              que des personnes ont laissés sur le commentaire que le Partenaire
              a publié sur les réseaux sociaux concernant un produit ou une
              entreprise
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Likes P</p>
            </div>
            <p>
              L'option Likes (publication) abrégé en Likes P concerne les likes
              que des personnes ont laissés sur la publication que le Partenaire
              a faites concernant un produit ou une entreprise
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>E10k</p>
            </div>
            <p>
              Les E-mails aux 10k abrégé en E10k concerne les e-mails envoyés
              aux comptes ayant entre 10.000 abonnés et moins de 1 millions
              d'abonnés
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>M10k</p>
            </div>
            <p>
              Les Messages aux 10k abrégé en M10k concerne les messages envoyés
              aux comptes ayant entre 10.000 abonnés et moins de 1 millions
              d'abonnés
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>MWI</p>
            </div>
            <p>
              Les Messages avec interaction abrégé en MWI concerne les messages
              dans lesqueslles Le Partenaire recommande un produit ou une
              entreprise lors de ces conversations avec ses proches
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>PWI</p>
            </div>
            <p>
              Les Publications avec interaction abrégé en PWI concerne les
              publications dans lesqueslles des personnes poses des questions en
              commentaire concernant le produit ou concernant l'entreprise qui
              est sur l'affiche de la publication et le Partenaire réponds à la
              question posé en commentaire
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>PWP</p>
            </div>
            <p>
              Les Publications sans Présentation abrégé en PWP concerne les
              publications qui ont été publié sans la partie présentation de
              leur programme d'affiliation
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Publication</p>
            </div>
            <p>
              L'option Publication concerne les publications publiées avec la
              partie présentation, le lien d'affiliation et l'affiche du produit
              ou de l'entreprise
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Message</p>
            </div>
            <p>
              L'option Message concerne les messages envoyés avec la partie
              présentation et le lien d'affiliation à ses amis ou à ses abonnés
              sur les réseaux sociaux
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>E-mail</p>
            </div>
            <p>
              L'option E-mail concerne les e-mails envoyés avec la partie
              présentation et le lien d'affiliation à un influenceur ou à une
              entreprise
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Commentaire</p>
            </div>
            <p>
              L'option Commentaire s'agit d'un commentaire concernant un produit
              ou une entreprise que le Partenaire a publié sur la publication
              d'une personne ou sur sa propre publication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
