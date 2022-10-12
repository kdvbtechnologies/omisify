import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Stats() {
  const navigate = useNavigate();
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  // september
  // september
  // september
  const [sept, setSept] = useState([]);
  const [tsept, settsept] = useState([]);

  useEffect(() => {
    axios
      .get(`https://famous-peplum-dove.cyclic.app/api/point/all/september`)
      .then((res) => setSept(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://famous-peplum-dove.cyclic.app/api/point/all/tseptember/6344c8869e261cca2e3cde7b`
      )
      .then((res) => settsept(res.data))
      .catch((err) => console.log(err));
  }, []);

  // october
  // october
  // october
  const [oct, setOct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://famous-peplum-dove.cyclic.app/api/point/all/october`)
      .then((res) => setOct(res.data))
      .catch((err) => console.log(err));
  }, []);

  // november
  // november
  // november
  const [nov, setNov] = useState([]);

  useEffect(() => {
    axios
      .get(`https://famous-peplum-dove.cyclic.app/api/point/all/november`)
      .then((res) => setNov(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="stats-big-title">
        <p>Statistiques détaillés</p>
      </div>

      <div className="flex-stats">
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

        <div className="stats">
          <div>
            <div className="stats-title">
              <p>Octobre 2022</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                {oct.map((point) => (
                  <p>
                    {point.dOctober} || {point.cOctober} points
                  </p>
                ))}
              </div>
            </div>
            <div className="total">
              <p> points</p>
            </div>
          </div>
        </div>

        <div className="stats">
          <div>
            <div className="stats-title">
              <p>Novembre 2022</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                {nov.map((point) => (
                  <p>
                    {point.dNovember} || {point.cNovember} points
                  </p>
                ))}
              </div>
            </div>
            <div className="total">
              <p> points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
  <div className="stats">
          <div>
            <div className="stats-title">
              <p>Décembre 2022</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                {point.map((point) => (
                  <p>
                    {point.dDecember2022} || {point.cDecember2022} points
                  </p>
                ))}
              </div>
            </div>
            <div className="total">
              <p> points • likes</p>
            </div>
          </div>
        </div>

        <div className="stats">
          <div>
            <div className="stats-title">
              <p>Janvier 2023</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                {point.map((point) => (
                  <p>
                    {point.dJanvier2022} || {point.cJanvier2022} points
                  </p>
                ))}
              </div>
            </div>
            <div className="total">
              <p> points • likes</p>
            </div>
          </div>
        </div>

        <div className="stats">
          <div>
            <div className="stats-title">
              <p>Février 2023</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                {point.map((point) => (
                  <p>
                    {point.dfebruary} || {point.cfebruary} points
                  </p>
                ))}
              </div>
            </div>
            <div className="total">
              <p> points • likes</p>
            </div>
          </div>
        </div>

  */
