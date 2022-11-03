import { useState } from "react";

export default function Test() {
  const [time, setTime] = useState();
  async function Download(e) {
    e.preventDefault();
    window.location = "https://jamelfase.com";
  }

  async function Print(e) {
    e.preventDefault();
    window.print();
  }

  async function Back(e) {
    e.preventDefault();
    window.history.back();
  }

  async function GetLanguage() {
    const l = navigator.language;
    console.log(l);
  }
  console.log(GetLanguage);

  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    const timed = h + ":" + m + ":" + s;
    console.log(timed);
    setTime(timed);
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  let prompt;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    prompt = e;
  });
  /*
  installButton.addEventListener("click", function() {
    prompt.prompt();
})*/

  function installButton() {
    //e.preventDefault();
    //prompt = e;
    prompt.prompt();
  }

  return (
    <>
      <button onClick={Download}>Download</button>
      <br />
      <button onClick={Print}>Imprimer</button>
      <br />
      <button onClick={Back}>Retour</button>
      <p id="demo"></p>
      <button onClick={GetLanguage}>Detect Language</button>
      <br />
      <button onClick={startTime}>Obtenir heure</button>
      <p>{time}</p>
      <p>{startTime}</p>
      <button onClick={installButton}>Install</button>
    </>
  );
}
