import axios from "axios";
import { useState, useEffect } from "react";

export default function StatsSeptember() {
  const [sept, setSept] = useState([]);
  const [tsept, settsept] = useState([]);
  const idtotal = "634777f3d469d81e78edf3ef";

  useEffect(() => {
    axios
      .get(`https://famous-peplum-dove.cyclic.app/api/point/all/september`)
      .then((res) => setSept(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://famous-peplum-dove.cyclic.app/api/point/all/tseptember/${idtotal}`
      )
      .then((res) => settsept(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="stats">
        <div>
          <div className="stats-title">
            <p>Septembre 2022</p>
          </div>
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
        </div>
      </div>
    </>
  );
}
