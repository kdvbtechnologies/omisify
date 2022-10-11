import axios from "axios";
import { useState } from "react";
import PartnerFooter from "./PartnerFooter";
//import { useDispatch, useSelector } from "react-redux";
//import { setPosts } from "../../feature/posts.slice";

export default function PartnerHeader() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState("");
  //const id = "634340e0476255949f2992a3";
  //const dispatch = useDispatch();
  //const posts = useSelector((state) => state.posts.posts);

  async function MyPosts() {
    await axios
      .get(`https://famous-peplum-dove.cyclic.app/api/user/${id}`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
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
      <input
        type="text"
        placeholder="Entrer votre code partenaire"
        value={id}
        name="id"
        onChange={(e) => setId(e.target.value)}
      />

      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@{posts.partnername}</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : {posts.name}</p>
              <p>Sexe : _ _ _</p>
              <p>Pays : _ _ _</p>
              <p>Age : _ _ _</p>
              <p>Code de Bienvenue : _ _ _</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <PartnerFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
