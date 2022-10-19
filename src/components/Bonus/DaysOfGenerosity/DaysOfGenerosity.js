import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../../../../feature/posts.slice";

export default function DaysOfGenerosity() {
  const [monthattendancebonus, setmonthattendancebonus] = useState("");
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
      <p>Les Journées de Générosité</p>
      <p>
        Les Journées de Générosité sont une forme de Bonus qui concernent 2
        jours dans la semaine. Les points que le Partenaire gagnent pendant les
        journées de générosité sont multipliés par 10
      </p>
      <p>Entrer vos jours de générosité</p>
      <input
        type="text"
        placeholder="Jours de générosité"
        value={monthattendancebonus}
        onChange={(e) => setmonthattendancebonus(e.target.value)}
        name="monthattendancebonus"
      />
      <button onClick={Validate}>Valider</button>
    </>
  );
}
