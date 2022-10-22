import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Partenaire Omisify/Loader";

export default function UpdateSuccess() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          const name = res.data.name;
          const partnername = res.data.partnername;
          const shortname = res.data.shortname;

          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus
          // bonus

          const getwelcomebonus = res.data.welcomebonus;
          if (getwelcomebonus) {
            localStorage.setItem(
              "https://omisify.com/welcomebonus",
              getwelcomebonus
            );
          }

          const bestpartnerbonus = res.data.bestpartnerbonus;
          if (bestpartnerbonus) {
            localStorage.setItem(
              "https://omisify.com/bestpartnerbonus",
              bestpartnerbonus
            );
          }

          const generositydaysbonus = res.data.generositydaysbonus;
          if (generositydaysbonus) {
            localStorage.setItem(
              "https://omisify.com/generositydaysbonus",
              generositydaysbonus
            );
          }

          // point total life
          // point total life
          // point total life
          // point total life
          // point total life
          // point total life
          // point total life
          // point total life
          // point total life
          // point total life
          // point total life
          // point total life
          // point total life
          // point total life
          // point total life
          const getoldpointtcommentlife = res.data.pointtcommentlife;
          if (getoldpointtcommentlife) {
            localStorage.setItem(
              "https://omisify.com/pointtcommentlife",
              getoldpointtcommentlife
            );
          }

          const getoldpointte10klife = res.data.pointte10klife;
          if (getoldpointte10klife) {
            localStorage.setItem(
              "https://omisify.com/pointte10klife",
              getoldpointte10klife
            );
          }

          const getoldpointtemaillife = res.data.pointtemaillife;
          if (getoldpointtemaillife) {
            localStorage.setItem(
              "https://omisify.com/pointtemaillife",
              getoldpointtemaillife
            );
          }

          const getoldpointtlikecommentlife = res.data.pointtlikecommentlife;
          if (getoldpointtlikecommentlife) {
            localStorage.setItem(
              "https://omisify.com/pointtlikecommentlife",
              getoldpointtlikecommentlife
            );
          }

          const getoldpointtlikepublicationlife =
            res.data.pointtlikepublicationlife;
          if (getoldpointtlikepublicationlife) {
            localStorage.setItem(
              "https://omisify.com/pointtlikepublicationlife",
              getoldpointtlikepublicationlife
            );
          }

          const getoldpointtm10klife = res.data.pointtm10klife;
          if (getoldpointtm10klife) {
            localStorage.setItem(
              "https://omisify.com/pointtm10klife",
              getoldpointtm10klife
            );
          }

          const getoldpointtmessagelife = res.data.pointtmessagelife;
          if (getoldpointtmessagelife) {
            localStorage.setItem(
              "https://omisify.com/pointtmessagelife",
              getoldpointtmessagelife
            );
          }

          const getoldpointtmwilife = res.data.pointtmwilife;
          if (getoldpointtmwilife) {
            localStorage.setItem(
              "https://omisify.com/pointtmwilife",
              getoldpointtmwilife
            );
          }

          const getoldpointtpublicationlife = res.data.pointtpublicationlife;
          if (getoldpointtpublicationlife) {
            localStorage.setItem(
              "https://omisify.com/pointtpublicationlife",
              getoldpointtpublicationlife
            );
          }

          const getoldpointtpwilife = res.data.pointtpwilife;
          if (getoldpointtpwilife) {
            localStorage.setItem(
              "https://omisify.com/pointtpwilife",
              getoldpointtpwilife
            );
          }

          const getoldpointtpwplife = res.data.pointtpwplife;
          if (getoldpointtpwplife) {
            localStorage.setItem(
              "https://omisify.com/pointtpwplife",
              getoldpointtpwplife
            );
          }

          const getoldpointtlife = res.data.pointtlife;
          if (getoldpointtlife) {
            localStorage.setItem(
              "https://omisify.com/pointtlife",
              getoldpointtlife
            );
          }

          const getoldgaintlife = res.data.gaintlife;
          if (getoldgaintlife) {
            localStorage.setItem(
              "https://omisify.com/gaintlife",
              getoldgaintlife
            );
          }

          // infos of user
          // infos of user
          // infos of user
          // infos of user
          // infos of user
          // infos of user
          // infos of user
          // infos of user
          // infos of user
          // infos of user
          // infos of user
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

          const getemail = res.data.email;
          if (getemail) {
            localStorage.setItem("https://omisify.com/email", getemail);
          }

          const getpaymentmethod = res.data.paymentmethod;
          if (getpaymentmethod) {
            localStorage.setItem(
              "https://omisify.com/paymentmethod",
              getpaymentmethod
            );
          }

          const getcodewelcome = res.data.codewelcome;
          if (getcodewelcome) {
            localStorage.setItem(
              "https://omisify.com/codewelcome",
              getcodewelcome
            );
          }

          const getgrouptelegram = res.data.grouptelegram;
          if (getgrouptelegram) {
            localStorage.setItem(
              "https://omisify.com/grouptelegram",
              getgrouptelegram
            );
          }

          const getgroupwhatsapp = res.data.groupwhatsapp;
          if (getgroupwhatsapp) {
            localStorage.setItem(
              "https://omisify.com/groupwhatsapp",
              getgroupwhatsapp
            );
          }

          const getnumbertelegram = res.data.numbertelegram;
          if (getnumbertelegram) {
            localStorage.setItem(
              "https://omisify.com/numbertelegram",
              getnumbertelegram
            );
          }

          const getnumberwhatsapp = res.data.numberwhatsapp;
          if (getnumberwhatsapp) {
            localStorage.setItem(
              "https://omisify.com/numberwhatsapp",
              getnumberwhatsapp
            );
          }

          const getdate = res.data.date;
          if (getdate) {
            localStorage.setItem("https://omisify.com/date", getdate);
          }

          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          // suite user infos
          const generositydays = res.data.generositydays;
          if (generositydays) {
            localStorage.setItem(
              "https://omisify.com/generositydays",
              generositydays
            );
          }

          /*
          const birthcountry = res.data.birthcountry;
          if (birthcountry) {
            localStorage.setItem(
              "https://omisify.com/birthcountry",
              birthcountry
            );
          }*/

          localStorage.setItem("https://omisify.com/name", name);
          localStorage.setItem("https://omisify.com/partnername", partnername);
          localStorage.setItem("https://omisify.com/shortname", shortname);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="update-success">
        <div className="title">
          <p>Terminé !</p>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {shortname && (
              <div className="a">
                <p>Le téléchargement de la dernière mise à jour à réussi</p>
                <NavLink to="/partner">
                  <button>Retourner sur la page d'accueil</button>
                </NavLink>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
