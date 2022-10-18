import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../../feature/posts.slice";

export default function RateMentor() {
  const [monthattendancebonus, setmonthattendancebonus] = useState("");
  //const userId = localStorage.getItem("https://omisify.com/userId");
  const dispatch = useDispatch();

  async function Ask(e) {
    e.preventDefault();

    const data = {
      codewelcome: codewelcome,
    };

    await axios
      .post(
        //`${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addPosts(data));
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <p>Évaluer le mentor</p>
      <p>
        Tout les jours l'élève peut donner une note sur 5 à son mentor
        accompagné d'un mot pour donner son avis sur le comportement du mentor
        et ses conseils
      </p>
      <p>
        La note de 5 est équivaut à 5 points et la note de 1 est équivaut à 1
        point.
      </p>
      <p>Entrer la note que vous voulez donner à votre mentor</p>
      <input
        type="number"
        placeholder="Mois"
        value={monthattendancebonus}
        onChange={(e) => setmonthattendancebonus(e.target.value)}
        name="monthattendancebonus"
      />
      <button onClick={Ask}>Noter</button>
    </>
  );
}
