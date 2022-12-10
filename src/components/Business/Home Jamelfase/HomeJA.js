import { NavLink } from "react-router-dom";
import entreprise from "./img/entreprise.png";
import magasin from "./img/magasin.jpg";
import site from "./img/site.jpg";
import smallbusiness from "./img/smallbusiness.jpg";
import service from "./img/service.jpg";
import profil from "./img/profil.png";
import create from "./img/create.png";
import stats from "./img/stats.png";
import app from "./img/app.png";
import app1 from "./img/app1.jpg";
import app2 from "./img/app2.jpg";

export default function HomeJA() {
  return (
    <>
      <div className="home-ja">
        <div className="main">
          <div className="display">
            <div className="a">
              <p>
                Voulez-vous augmenter le chiffre d'affaire de votre entreprise ?
              </p>
              <img src={entreprise} alt="imagee jamelfase" />
            </div>

            <div className="a">
              <p>
                Voulez-vous augmenter les bénéfices de votre petit business ?
              </p>
              <img src={smallbusiness} alt="imagee jamelfase" />
            </div>
          </div>

          <div className="display">
            <div className="a">
              <p>
                Voulez-vous augmenter le nombre d'utilisateur sur votre site
                internet ou application mobile ?
              </p>

              <img src={site} alt="imagee jamelfase" />
            </div>

            <div className="a">
              <p>Voulez-vous augmenter les clients de votre magasin ?</p>
              <img src={magasin} alt="imagee jamelfase" />
            </div>
          </div>

          <div className="paragraph">
            <p align="center">Jamelfase est la plateforme qui vous</p>

            <div className="a">
              <p>convient pour </p>
              <p style={{ color: "#fcff07" }}>augmenter les bénéfices </p>
              <p>de votre entreprise </p>
            </div>

            <div className="a">
              <p>car pour votre information Jamelfase comporte</p>
              <p style={{ textDecoration: "underline", cursor: "pointer" }}>
                Alrani,
              </p>
              <p style={{ textDecoration: "underline", cursor: "pointer" }}>
                Omisify
              </p>
              <p>et</p>
              <p style={{ textDecoration: "underline", cursor: "pointer" }}>
                inizel
              </p>
            </div>
          </div>

          <div className="background">
            <div className="a">
              <div className="b">
                <NavLink className="navlink" to="/">
                  <p style={{ color: "black" }}>Inscrivez-vous gratuitement</p>
                </NavLink>

                <p>et</p>
                <p>Utilisez les</p>
                <p style={{ textDecoration: "underline", cursor: "pointer" }}>
                  Partenaires Omisify,
                </p>
                <p>les</p>
                <p style={{ textDecoration: "underline", cursor: "pointer" }}>
                  Partenaires Omisify Vidéastes,
                </p>
                <p>les</p>
                <p style={{ textDecoration: "underline", cursor: "pointer" }}>
                  Partenaires Omisify Influents
                </p>
                <p>comme Outil Publicitaire</p>
              </div>
            </div>

            <div className="a">
              <div className="b">
                <p>
                  Utilisez aussi la plateforme de téléchargement de PDF Alrani
                  et le facilitateur de recherche inizel
                </p>
                <p>pour</p>
                <NavLink className="navlink" to="/">
                  <p style={{ color: "black" }}>
                    faire gratuitement la publicité
                  </p>
                </NavLink>
                <p>de votre entreprise</p>
              </div>
            </div>
          </div>

          <NavLink className="navlink" to="/">
            <div className="guide">
              <p>
                Suivez ce guide simple pour savoir comment s'y prendre après
                votre inscription
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                cursor="pointer"
                width="20px"
                enableBackground="new 0 0 227.096 227.096"
                version="1.1"
                viewBox="0 0 227.096 227.096"
                xmlSpace="preserve"
              >
                <path d="M152.835 39.285L146.933 45.183 211.113 109.373 0 109.373 0 117.723 211.124 117.723 146.933 181.902 152.835 187.811 227.096 113.55z"></path>
              </svg>
            </div>
          </NavLink>

          <div className="profil">
            <div className="a">
              <img src={profil} alt="imagee jamelfase" />
            </div>

            <div className="a">
              <p>
                Tout depuis votre compte Jamelfase, gérer votre publicité
                Alrani, inizel et ceux des Partenaires Omisify depuis votre
                compte Jamelfase
              </p>
            </div>
          </div>

          <div className="create">
            <div className="a">
              <p>
                Essayez gratuitement la publicité pour bénéficier du Bonus de
                Bienvenue et pleins d'autres Bonus
              </p>
            </div>

            <div className="a">
              <img src={create} alt="imagee jamelfase" />
            </div>
          </div>

          <div className="profil">
            <div className="a">
              <img src={stats} alt="imagee jamelfase" />
            </div>

            <div className="a">
              <p>
                L'outil Jamelfase est sophistiqué et vous permet de suivre les
                résultats de votre publicité avec des détails annuels, mensuels,
                journaliers et horaires. Et en Bonus vous avez des notifications
                pour restez toujours informé sur l'évolution de votre publicité
              </p>
            </div>
          </div>

          <div className="app">
            <div className="a">
              <img src={app} alt="imagee jamelfase" />
              <img src={app1} alt="imagee jamelfase" />
              <img src={app2} alt="imagee jamelfase" />
            </div>

            <div className="a">
              <p>
                Votre application Jamelfase vous servira pour suivre les
                résultats de votre publicité en temps réel partout, où que vous
                soyez, même en déplacement
              </p>
            </div>
          </div>

          <p>
            Le modèle de tarification basé sur les enchères vous permet de fixer
            vous-même vos prix, de dépenser moins et de gagner plus
          </p>
          <p>
            N'attendez plus, agissez maintenant et regarder les résultats de
            votre publicité en temps réel !
          </p>
          <button>Essayer gratuitement la publicité</button>

          <p>Réussir sa campagne publicitaire</p>

          <p>
            Omisify, c'est quoi Omisify ? En tant qu'entreprise vous devez
            retenir qu'Omisify est une plateforme qui fait de la publicité ciblé
            pour des entreprises à travers des applications de messagerie. Tout
            l'écosystème d'Omisify a été concue pour un seul but : Faire de la
            publicité cibler à travers des applications de messagerie. Si dans
            votre entreprise vous utilisez des applications de messagerie (tel
            que Whatsapp, Telegram, Viber, Linphone, Signal, WeChat, ...) pour
            vendre directement vos services à vos clients alors Omisify est la
            plateforme la mieux adaptée pour votre publicité
          </p>

          <p>
            Si la publicité de votre entreprise a pour but de ramener les
            clients sur votre site internet ou de télécharger votre application
            mobile alors Alrani est la plateforme la mieux adaptée pour votre
            publicité
          </p>

          <p>
            Si la publicité de votre entreprise a pour but de ramener les
            clients dans votre magasin physique alors les partenaires Omisify
            influents et vidéastes sont les mieux adaptées pour votre publicité
          </p>

          <p>
            Si la publicité de votre entreprise ne nécessite pas un ciblage
            précis par exemple pour ramener les internautes sur votre site de
            réseaux social ou sur votre moteur de recherche alors les
            Partenaires Omisify à travers les commentaires avec affiche
            publicitaire et les Partenaires Omisify Vidéastes sont les mieux
            adaptée pour votre publicité
          </p>

          <p>
            Si la publicité de votre entreprise comporte une vidéo dans laquelle
            une figure d'autorité consomme votre produit par exemple si vous
            fabriquez des yaourts ou des boissons énergissantes, la publicité
            cibler sur Alrani sera la mieux adaptée pour votre entreprise{" "}
          </p>

          <p>
            Pour réussir votre campagne publicitaire, Choisissez la plateforme
            la mieux adaptée pour la publicité de votre entreprise
          </p>

          <div className="service">
            <img src={service} alt="imagee customer service jamelfase" />
            <p>Besoin d'aide ? Notre service client est disponible 24h/24</p>
            <p style={{ color: "blue", cursor: "pointer" }}>
              Contacter le service client
            </p>
          </div>

          <p>Preuve sociale</p>
          <p>Faites comme les autres, essayer gratuitement la publicité</p>
          <button>Essayer gratuitement la publicité</button>
        </div>
      </div>
    </>
  );
}
