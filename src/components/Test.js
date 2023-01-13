/*
import { useEffect } from "react";
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

  function installButton() {
    console.log("one");
  }

  useEffect(() => {
    window.addEventListener("click", installButton);
  }, []);

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
    </>
  );
}
*/

import { useState } from "react";

const faqdata = [
  { Question: "Q1", Answer: "A1", id: "100000" },
  { Question: "Q2", Answer: "A2", id: "22" },
  { Question: "Q3", Answer: "A3", id: "666" },
  { Question: "Q4", Answer: "A4", id: "4" },
];

const AddIcon = () => <span class="icon">&#43;</span>;
const RemoveIcon = () => <span class="icon">&#9747;</span>;

function ListItem({ d }) {
  const [checked, setChecked] = useState(false);
  console.log(d.id);
  const save = d.id;
  localStorage.setItem("Save2023", save);

  return (
    <li
      onClick={() => {
        setChecked(!checked);
      }}
    >
      {checked ? <RemoveIcon /> : <AddIcon />}
      {d.Question}
    </li>
  );
}

export default function Test() {
  return (
    <ul>
      {faqdata.map((d) => {
        return <ListItem d={d} />;
      })}
    </ul>
  );
}
