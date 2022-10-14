import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function StatsSeptember() {
  const [sept, setSept] = useState([]);
  //Sconst [settsept] = useState([]);
  const idtsept = localStorage.getItem("https://omisify.com/idtsept");
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setLoading] = useState(true);
  console.log(isLoading);

  useEffect(() => {
    async function get() {
      await axios
        .get(`https://famous-peplum-dove.cyclic.app/api/point/all/september`)
        .then((res) => {
          console.log(res);
          setSept(res.data);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    }
    get();
  }, []);

  useEffect(() => {
    async function get() {
      await axios
        .get(
          `https://famous-peplum-dove.cyclic.app/api/point/all/tseptember/${idtsept}`
        )
        .then((res) => {
          console.log(res);
          // settsept(res.data);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    }
    get();
  }, [idtsept]);

  // <p>{tsept.total} points</p>
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
            <>
              <div className="stats-cards">
                <div className="a">
                  {sept
                    .filter((country) => country.includes(`${userId}`))
                    .map((point) => (
                      <p>
                        {point.dSeptember} || {point.cSeptember} points
                      </p>
                    ))}
                </div>
              </div>
              <div className="total"></div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
