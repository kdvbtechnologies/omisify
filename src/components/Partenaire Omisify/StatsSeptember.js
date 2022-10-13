import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import StatsSeptProps from "./StatsSeptProps";

export default function StatsSeptember() {
  const [sept, setSept] = useState([]);
  const [tsept, settsept] = useState([]);
  const idtotal = localStorage.getItem("https://omisify.com/idtotal");
  const [isLoading, setLoading] = useState(true);
  console.log(isLoading);

  useEffect(() => {
    axios
      .get(`https://famous-peplum-dove.cyclic.app/api/point/all/september`)
      .then((res) => setSept(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://famous-peplum-dove.cyclic.app/api/point/all/tseptember/${idtotal}`
      )
      .then((res) => settsept(res.data))
      .catch((err) => console.log(err));
  }, [idtotal]);

  return (
    <>
      <div className="stats">
        <div>
          <div className="stats-title">
            <p>Septembre 2022</p>
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <StatsSeptProps sept={sept} tsept={tsept} />
          )}
        </div>
      </div>
    </>
  );
}
