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
              <p>Partenaire Omisify Influent</p>
            </div>
            <p>
              Le type de catégorie Partenaire Omisify Influent concerne un
              Partenaire qui a sur les réseaux sociaux des abonnés qui le
              suivent
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Partenaire Omisify</p>
            </div>
            <p>
              Le type de catégorie Partenaire Omisify concerne un Partenaire qui
              n'a pas sur les réseaux sociaux des abonnés qui le suivent mais
              qui a une liste des personnes avec lequel ils sont amis sur les
              réseaux sociaux
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Partenaire Omisify Vidéaste</p>
            </div>
            <p>
              Le type de catégorie Partenaire Omisify Vidéaste concerne un
              Partenaire qui s'est spécialisé dans la publication des vidéos sur
              les réseaux sociaux
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Contacts de Confiance</p>
            </div>
            <p>
              Les Contacts de Confiance sont des personnes avec lesqueslles vous
              avez l'habitude de causés tout les jours à travers des
              applications de messagerie tel que Whatsapp, Telegram, Signal,
              Viber, Skype, Messenger, WeChat, ...
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Publication publicitaire</p>
            </div>
            <p>
              Une Publication Publicitaire est une publication publiée par un
              Partenaire Omisify ou un Partenaire Omisify Influent concernant un
              produit ou une entreprise
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Vidéo publicitaire</p>
            </div>
            <p>
              Une Vidéo Publicitaire est une vidéo publiée par un Partenaire
              Omisify Vidéaste concernant un produit ou une entreprise
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Commentaire publicitaire</p>
            </div>
            <p>
              Un Commentaire Publicitaire est un commentaire publiée par un
              Partenaire Omisify concernant un produit ou une entreprise
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>E-mail publicitaire</p>
            </div>
            <p>
              Un E-mail Publicitaire est un e-mail faisant la publicité d'un
              produit ou d'une offre envoyé par un Partenaire Omisify à une
              entreprise ou à un inconnu. Les E-mails publicitaire sont
              généralement utilisés par les entreprises B2B
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Message publicitaire</p>
            </div>
            <p>
              Un Message Publicitaire est un message faisant la publicité d'un
              produit ou d'une entreprise envoyé par un Partenaire Omisify à sa
              liste d'amis ou à n'importe qui sur les réseaux sociaux
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Lien publicitaire</p>
            </div>
            <p>
              Un Lien Publicitaire est un lien redirigera l'internaute vers le
              produit ou vers le site d'une entreprise ou vers l'application à
              télécharger. Le lien publicitaire est fourni par tout entreprise
              qui paye la publicité chez Omisify Business. Certains programmes
              publicitaires n'ont pas de lien publicitaire à cause du but de la
              publicité et de ce qu'attend l'entreprise cliente
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
              que des personnes ont laissés sur le commentaire publicitaire d'un
              Partenaire Omisify ou d'un Partenaire Omisify Influent
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Likes P</p>
            </div>
            <p>
              L'option Likes (publication) abrégé en Likes P concerne les likes
              que des personnes ont laissés sur la publication publicitaire d'un
              Partenaire Omisify ou d'un Partenaire Omisify Influent
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Likes V</p>
            </div>
            <p>
              L'option Likes (vidéo) abrégé en Likes V concerne les likes que
              des personnes ont laissés sur la vidéo publicitaire d'un
              Partenaire Omisify Vidéaste
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>E10k</p>
            </div>
            <p>
              Les E-mails aux 10k abrégé en E10k concerne les e-mails
              publicitaire envoyés par un Partenaire Omisify aux comptes ayant
              entre 10000 abonnés et moins d'un millions d'abonnés
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>M10k</p>
            </div>
            <p>
              Les Messages aux 10k abrégé en M10k concerne les messages
              publicitaire envoyés par un Partenaire Omisify aux comptes ayant
              entre 10000 abonnés et moins d'un millions d'abonnés
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>MWI</p>
            </div>
            <p>
              Les Messages avec interaction abrégé en MWI concerne les messages
              publicitaire dans lesqueslles un Partenaire Omisify Influent, un
              Partenaire Omisify ou un Partenaire Omisify Vidéaste recommande un
              produit ou une entreprise lors de ses conversations avec ses
              Contacts de Confiance
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>PWI</p>
            </div>
            <p>
              La Publication avec interaction abrégé en PWI concerne la
              publication publicitaire dans laquelle des personnes poses des
              questions en commentaire concernant le produit ou concernant
              l'entreprise qui est sur l'affiche de la publication et le
              Partenaire Omisify ou Partenaire Omisify Influent répond en
              commentaire à la question posé
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>PWP</p>
            </div>
            <p>
              La PWP (Publication Without Presentation, en français Publication
              sans Présentation) abrégé en PWP concerne une publication qui a
              été publiée par un Partenaire Omisify ou un Partenaire Omisify
              Influent sans la partie présentation de son programme
              publicitaire. Par exemple le Partenaire peut publier sa photo et
              mettre juste le lien publicitaire
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Publication</p>
            </div>
            <p>
              L'option Publication concerne une publication publiée par un
              Partenaire Omisify ou un Partenaire Omisify Influent avec la
              partie présentation, le lien publicitaire et l'affiche du produit
              ou de l'entreprise
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Message</p>
            </div>
            <p>
              L'option Message concerne un message publicitaire envoyé par un
              Partenaire Omisify avec la partie présentation et le lien
              publicitaire à ses amis ou à des inconnus sur les réseaux sociaux
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>E-mail</p>
            </div>
            <p>
              L'option E-mail concerne un e-mail publicitaire envoyé par un
              Partenaire Omisify à une entreprise ou à un inconnu (E-mail
              contenant la partie présentation et le lien publicitaire)
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Commentaire</p>
            </div>
            <p>
              L'option Commentaire s'agit d'un commentaire publicitaire
              concernant un produit ou une entreprise publié par le Partenaire
              Omisify sur sa propre publication ou sur la publication d'une
              autre personne
            </p>
          </div>

          <div className="a">
            <div className="b">
              <p>Validation automatique</p>
            </div>
            <p>
              Le statut YES signifie que la validation automatique est ouverte
            </p>
            <p>Le statut NO signifie que la validation automatique est fermé</p>
          </div>

          <div className="a">
            <div className="b">
              <p>ATP</p>
            </div>
            <p>ATP : Ancien Total des Points</p>
          </div>
        </div>
      </div>
    </div>
  );
}
