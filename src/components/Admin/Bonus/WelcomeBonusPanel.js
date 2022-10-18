import axios from "axios";
import { useEffect, useState } from "react";
import LoginNav from "../../Auth/LoginNav";
import PanelNav from "../Navigation/PanelNav";

export default function WelcomeBonusPanel() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/panel/`)
        .then((res) => {
          console.log(res);
          setApi(res.data);
        })
        .catch((err) => console.log(err));
    }
    get();
  }, []);
  /*
  const welcomebonus = 100;
  const userId = `${api.userId}`;
  const codewelcomementor = `${api.codewelcomementor}`;*/
  /*
  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/update/${userId}`,
      data: {
        codewelcomementor,
        welcomebonus,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }*/

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <LoginNav />
      <PanelNav />
      {api.map((api) => (
        <>
          <h4>Code de Bienvenue</h4>
          <p>Noms du demandeur : {api.partnername}</p>
          <p>Noms court du demandeur : {api.shortname}</p>
          <p>Code de Bienvenue du mentor : {api.codewelcomementor}</p>
          <p>- - -- - -- - -- - -- - -- - -- - -</p>
          <p>Bonus de Bienvenue recu : {api.welcomebonus} point(s)</p>
          <p>________________________________</p>
        </>
      ))}
    </div>
  );
}
