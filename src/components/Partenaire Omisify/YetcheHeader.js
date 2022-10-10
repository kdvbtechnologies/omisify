import axios from "axios";
import { useState } from "react";
import YetcheFooter from "./YetcheFooter";
//import { useDispatch, useSelector } from "react-redux";
//import { setPosts } from "../../feature/posts.slice";

export default function YetcheHeader() {
  const [posts, setPosts] = useState([]);
  const id = "634340e0476255949f2992a3";
  //const dispatch = useDispatch();
  //const posts = useSelector((state) => state.posts.posts);

  async function MyPosts() {
    await axios
      .get(`https://famous-peplum-dove.cyclic.app/api/post/${id}`)
      .then((res) => setPosts(res.data));
  }
  MyPosts();

  /*
  async function MyPosts() {
    await axios
      .get(`https://famous-peplum-dove.cyclic.app/api/post/${id}`)
      .then((res) => dispatch(setPosts(res.data)))
      .catch((err) => {
        console.log(err);
      });
  }
  MyPosts();*/

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
              <p>Noms de naissance : {posts.username}</p>
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
    </>
  );
}
