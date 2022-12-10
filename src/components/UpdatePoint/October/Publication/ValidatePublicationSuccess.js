import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function ValidatePublicationSuccess() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          const pointtpublicationlife = res.data.pointtpublicationlife;
          if (pointtpublicationlife) {
            localStorage.setItem(
              "https://omisify.com/pointtpublicationlife",
              pointtpublicationlife
            );
          }

          const pointtlife = res.data.pointtlife;
          if (pointtlife) {
            localStorage.setItem("https://omisify.com/pointtlife", pointtlife);
          }

          const gaintlife = res.data.gaintlife;
          if (gaintlife) {
            localStorage.setItem("https://omisify.com/gaintlife", gaintlife);
          }
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
      <div className="icon-validate-comment-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          width="30px"
          fill="#00cc00"
          enableBackground="new 0 0 512.005 512.005"
          version="1.1"
          viewBox="0 0 512.005 512.005"
          xmlSpace="preserve"
        >
          <path d="M234.667 426.669c-2.816 0-5.675-.192-8.469-.555-19.691-2.645-37.312-14.507-47.104-31.723L93.781 245.08c-8.491-14.827-10.688-32.085-6.208-48.597 4.501-16.491 15.168-30.229 30.016-38.72a64.16 64.16 0 0131.723-8.427c22.891 0 44.181 12.352 55.573 32.213l43.776 76.629L445.419 61.421c6.848-6.848 15.04-11.733 23.915-14.869V21.336H0v469.333h469.333v-272.17L279.915 407.917c-12.032 12.096-28.118 18.752-45.248 18.752z"></path>
          <path d="M505.749 91.587c-8.341-8.341-21.824-8.341-30.165 0L239.339 327.832l-71.488-125.077c-5.845-10.24-18.88-13.803-29.099-7.936-10.24 5.845-13.803 18.88-7.936 29.099l85.333 149.333a21.282 21.282 0 0015.68 10.56 21.263 21.263 0 0017.92-6.059l256-256c8.342-8.341 8.342-21.824 0-30.165z"></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          fill="blue"
          x="0"
          y="0"
          enableBackground="new 0 0 31.938 31.938"
          version="1.1"
          viewBox="0 0 31.938 31.938"
          xmlSpace="preserve"
        >
          <circle cx="16.288" cy="3.602" r="3.602"></circle>
          <path d="M25.529 6.865L25.13 5.029 19.311 7.744 17.598 7.744 16.225 9.337 14.898 7.744 12.307 8.231 12.31 8.257 6.719 4.697 5.41 6.752 12.653 11.363 13.029 14.759 13.097 16.104 13.285 16.104 13.285 16.922 13.285 17.527 11.765 20.346 8.768 18.758 7.59 20.98 7.591 20.98 7.277 21.575 8.064 21.992 8.378 21.398 12.598 23.634 13.775 21.41 13.77 21.407 15.863 17.527 16.768 17.527 17.839 21.865 15.308 25.604 15.314 25.607 15.308 25.617 17.908 27.378 18.525 26.468 17.966 26.09 20.531 22.297 20.519 22.288 19.345 17.527 19.345 16.922 19.345 16.104 19.574 16.104 20.025 10.202z"></path>
          <path d="M0.928 30.223H31.01V31.938H0.928z"></path>
        </svg>
      </div>
      {/* icon-validate-comment-success */}

      <div className="validate-comment-success">
        <div className="title">
          <p>Résultats Validés !</p>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <NavLink to="/complete">
              <button>Terminer</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
