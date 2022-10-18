import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../../feature/posts.slice";

export default function AttendanceBonus() {
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
      <p>Bonus de Présence</p>
      <p>
        Le Bonus de Présence de 30 points est offert chaque mois à chaque
        partenaire qui manifeste sa présence en contactant le Service Partenaire
        sur Whatsapp ou Telegram
      </p>
      <p>
        Pour demeurer éligible, le Partenaire doit contacter le Service
        Partenaire au moins une fois par mois
      </p>
      <p>
        Entrer le mois au cours duquel vous voulez faire la demande du Bonus de
        Présence
      </p>
      <input
        type="text"
        placeholder="Mois"
        value={monthattendancebonus}
        onChange={(e) => setmonthattendancebonus(e.target.value)}
        name="monthattendancebonus"
      />
      <button onClick={Ask}>Demander le Bonus de Présence</button>
    </>
  );
}
