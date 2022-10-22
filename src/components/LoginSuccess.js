import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Partenaire Omisify/Loader";

export default function LoginSuccess() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const name = res.data.name;
          const partnername = res.data.partnername;
          const shortname = res.data.shortname;

          const getoldpointtlife = res.data.pointtlife;
          if (getoldpointtlife) {
            localStorage.setItem(
              "https://omisify.com/pointtlife",
              getoldpointtlife
            );
          }

          const getoldpointtemaillife = res.data.pointtemaillife;
          if (getoldpointtemaillife) {
            localStorage.setItem(
              "https://omisify.com/pointtemaillife",
              getoldpointtemaillife
            );
          }

          const getoldpointtmwilife = res.data.pointtmwilife;
          if (getoldpointtmwilife) {
            localStorage.setItem(
              "https://omisify.com/pointtmwilife",
              getoldpointtmwilife
            );
          }

          const getoldpointtmessagelife = res.data.pointtmessagelife;
          if (getoldpointtmessagelife) {
            localStorage.setItem(
              "https://omisify.com/pointtmessagelife",
              getoldpointtmessagelife
            );
          }

          const getoldpointtpwilife = res.data.pointtpwilife;
          if (getoldpointtpwilife) {
            localStorage.setItem(
              "https://omisify.com/pointtpwilife",
              getoldpointtpwilife
            );
          }

          const getoldpointtpublicationlife = res.data.pointtpublicationlife;
          if (getoldpointtpublicationlife) {
            localStorage.setItem(
              "https://omisify.com/pointtpublicationlife",
              getoldpointtpublicationlife
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

          const getoldpointtcommentlife = res.data.pointtcommentlife;
          if (getoldpointtcommentlife) {
            localStorage.setItem(
              "https://omisify.com/pointtcommentlife",
              getoldpointtcommentlife
            );
          }

          const getoldgaintlife = res.data.gaintlife;
          if (getoldgaintlife) {
            localStorage.setItem(
              "https://omisify.com/gaintlife",
              getoldgaintlife
            );
          }

          const getoldpointtlikecommentlife = res.data.pointtlikecommentlife;
          if (getoldpointtlikecommentlife) {
            localStorage.setItem(
              "https://omisify.com/pointtlikecommentlife",
              getoldpointtlikecommentlife
            );
          }

          const getwelcomebonus = res.data.welcomebonus;
          if (getwelcomebonus) {
            localStorage.setItem(
              "https://omisify.com/welcomebonus",
              getwelcomebonus
            );
          }

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

          const getpointwhatsapp = res.data.pointwhatsapp;
          if (getpointwhatsapp) {
            localStorage.setItem(
              "https://omisify.com/pointwhatsapp",
              getpointwhatsapp
            );
          }

          const getpointtelegram = res.data.pointtelegram;
          if (getpointtelegram) {
            localStorage.setItem(
              "https://omisify.com/pointtelegram",
              getpointtelegram
            );
          }

          const getdate = res.data.date;
          if (getdate) {
            localStorage.setItem("https://omisify.com/date", getdate);
          }

          const generositydays = res.data.generositydays;
          if (generositydays) {
            localStorage.setItem(
              "https://omisify.com/generositydays",
              generositydays
            );
          }

          const generositydaysbonus = res.data.generositydaysbonus;
          if (generositydaysbonus) {
            localStorage.setItem(
              "https://omisify.com/generositydaysbonus",
              generositydaysbonus
            );
          }

          const bestpartnerbonus = res.data.bestpartnerbonus;
          if (bestpartnerbonus) {
            localStorage.setItem(
              "https://omisify.com/bestpartnerbonus",
              bestpartnerbonus
            );
          }

          const birthcountry = res.data.birthcountry;
          if (birthcountry) {
            localStorage.setItem(
              "https://omisify.com/birthcountry",
              birthcountry
            );
          }

          localStorage.setItem("https://omisify.com/name", name);
          localStorage.setItem("https://omisify.com/partnername", partnername);
          localStorage.setItem("https://omisify.com/shortname", shortname);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  function Success() {
    window.location = "/partner";
  }

  return (
    <>
      <div className="login-success">
        <h1>Connexion réussie !</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {shortname && (
              <div className="button">
                <button onClick={Success}>Continuer</button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
