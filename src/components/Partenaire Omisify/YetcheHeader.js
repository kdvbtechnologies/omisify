import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../feature/posts.slice";
import YetcheFooter from "./YetcheFooter";

export default function YetcheHeader() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const id = "634340e0476255949f2992a3";

  async function GetPost() {
    await axios
      .get(`https://famous-peplum-dove.cyclic.app/api/post/${id}`)
      .then((res) => dispatch(setPosts(res.data)));
  }
  GetPost();

  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Yetche Aldo</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : ..</p>
              <p>Sexe : ..</p>
              <p>Pays : Cameroun</p>
              <p>Age : 32 ans</p>
              <p>Compte Facebook : Yetche Siegomnou Aldo</p>
              <p>Code de Bienvenue : Crypto90</p>
              <p>Catégorie : Non-Influenceur</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <YetcheFooter />
            </div>
          </div>
        </div>
      </div>

      {posts?.map((post, id) => (
        <div key={post.id}>
          <h1>{post.desc}</h1>
        </div>
      ))}
    </>
  );
}
