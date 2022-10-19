import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { setInfos } from "../../feature/infos.slice";
import Loader from "../Partenaire Omisify/Loader";
import { useDispatch } from "react-redux";

export default function InfosUpdateSuccess() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  // il faut importer useselector la haut
  // const infos = useSelector((state) => state.infos.infos)

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          dispatch(setInfos(res.data));

          // infos of user
          const getgenre = res.data.genre;
          if (getgenre) {
            localStorage.setItem("https://omisify.com/genre", getgenre);
          }

          const getage = res.data.age;
          if (getage) {
            localStorage.setItem("https://omisify.com/age", getage);
          }

          const getcountry = res.data.country;
          if (getcountry) {
            localStorage.setItem("https://omisify.com/country", getcountry);
          }

          const getbirthcountry = res.data.birthcountry;
          if (getbirthcountry) {
            localStorage.getItem(
              "https://omisify.com/birthcountry",
              getbirthcountry
            );
          }

          const getdateofbirth = res.data.dateofbirth;
          if (getdateofbirth) {
            localStorage.setItem(
              "https://omisify.com/dateofbirth",
              getdateofbirth
            );
          }

          const getpaymentmethod = res.data.paymentmethod;
          if (getpaymentmethod) {
            localStorage.setItem(
              "https://omisify.com/paymentmethod",
              getpaymentmethod
            );
          }

          const getemail = res.data.email;
          if (getemail) {
            localStorage.setItem("https://omisify.com/email", getemail);
          }

          const getcodewelcome = res.data.codewelcome;
          if (getcodewelcome) {
            localStorage.setItem(
              "https://omisify.com/codewelcome",
              getcodewelcome
            );
          }

          const getgroupwhatsapp = res.data.groupwhatsapp;
          if (getgroupwhatsapp) {
            localStorage.setItem(
              "https://omisify.com/groupwhatsapp",
              getgroupwhatsapp
            );
          }

          const getgrouptelegram = res.data.grouptelegram;
          if (getgrouptelegram) {
            localStorage.setItem(
              "https://omisify.com/grouptelegram",
              getgrouptelegram
            );
          }

          const getnumberwhatsapp = res.data.numberwhatsapp;
          if (getnumberwhatsapp) {
            localStorage.setItem(
              "https://omisify.com/numberwhatsapp",
              getnumberwhatsapp
            );
          }

          const getnumbertelegram = res.data.numbertelegram;
          if (getnumbertelegram) {
            localStorage.setItem(
              "https://omisify.com/numbertelegram",
              getnumbertelegram
            );
          }

          const getdate = res.data.date;
          if (getdate) {
            localStorage.setItem("https://omisify.com/date", getdate);
          }

          const name = res.data.name;
          const partnername = res.data.partnername;
          const shortname = res.data.shortname;
          localStorage.setItem("https://omisify.com/name", name);
          localStorage.setItem("https://omisify.com/partnername", partnername);
          localStorage.setItem("https://omisify.com/shortname", shortname);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  });

  return (
    <div style={family}>
      <div className="welcome-bonus">
        <div className="title">
          <p>Modification(s) réussi !</p>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <NavLink to="/infos">
              <button>Terminé</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
