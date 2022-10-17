import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../../feature/posts.slice";

export default function Welcome() {
  const [codewelcome, setCodeWelcome] = useState("");
  //const userId = localStorage.getItem("https://omisify.com/userId");
  const dispatch = useDispatch();

  async function Validate(e) {
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
      <p>Bonus de Bienvenue</p>
      <p>
        Le Bonus de Bienvenue de 100 points est offert à chaque nouveau arivant
        après avoir entrer le Code de Bienvenue de son mentor
      </p>
      <p>Entrer le Code de Bienvenue de votre mentor</p>
      <input
        type="text"
        placeholder="Code de Bienvenue"
        value={codewelcome}
        onChange={(e) => setCodeWelcome(e.target.value)}
        name="codewelcome"
      />
      <button onClick={Validate}>Valider</button>
    </>
  );
}
