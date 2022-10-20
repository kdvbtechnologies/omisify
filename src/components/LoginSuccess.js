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
              "https://omisify.com/getoldpointtlife",
              getoldpointtlife
            );
          }

          const getoldnumbertemaillife = res.data.numbertemaillife;
          if (getoldnumbertemaillife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertemaillife",
              getoldnumbertemaillife
            );
          }

          const getoldnumbertmwilife = res.data.numbertmwilife;
          if (getoldnumbertmwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmwilife",
              getoldnumbertmwilife
            );
          }

          const getoldnumbertmessagelife = res.data.numbertmessagelife;
          if (getoldnumbertmessagelife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmessagelife",
              getoldnumbertmessagelife
            );
          }

          const getoldnumbertpwilife = res.data.numbertpwilife;
          if (getoldnumbertpwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpwilife",
              getoldnumbertpwilife
            );
          }

          const getoldnumbertpublicationlife = res.data.numbertpublicationlife;
          if (getoldnumbertpublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpublicationlife",
              getoldnumbertpublicationlife
            );
          }

          const getoldnumbertlikepublicationlife =
            res.data.numbertlikepublicationlife;
          if (getoldnumbertlikepublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikepublicationlife",
              getoldnumbertlikepublicationlife
            );
          }

          const getoldnumbertcommentlife = res.data.numbertcommentlife;
          if (getoldnumbertcommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertcommentlife",
              getoldnumbertcommentlife
            );
          }

          const getoldgaintlife = res.data.gaintlife;
          if (getoldgaintlife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlife",
              getoldgaintlife
            );
          }

          const getoldnumbertlikecommentlife = res.data.numbertlikecommentlife;
          if (getoldnumbertlikecommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikecommentlife",
              getoldnumbertlikecommentlife
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

          const generositydays = res.data.generositydays;
          if (generositydays) {
            localStorage.setItem(
              "https://omisify.com/generositydays",
              generositydays
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
