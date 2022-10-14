import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function StatsSeptember() {
  const [sept, setSept] = useState([]);
  const [tsept, settsept] = useState([]);
  const idtsept = localStorage.getItem("https://omisify.com/idtsept");
  //const userId = localStorage.getItem("https://omisify.com/userId");
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
          settsept(res.data);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    }
    get();
  }, [idtsept]);

  return (
    <>
      <div className="stats">
        {idtsept && (
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
                    {sept.map((point) => (
                      <p>
                        {point.dSeptember} || {point.cSeptember} points
                      </p>
                    ))}
                  </div>
                </div>
                <div className="total">
                  <p>{tsept.total} points</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
